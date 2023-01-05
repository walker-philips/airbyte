/*
 * Copyright (c) 2023 Airbyte, Inc., all rights reserved.
 */

package io.airbyte.featureflag

/**
 * Context abstraction around LaunchDarkly v6 context idea
 *
 * I'm still playing around with this.  Basically the idea is to define our own custom context types
 * (by implementing this sealed interface) to ensure that we are consistently using the same identifiers
 * throughout the code.
 *
 * @property [kind] determines the kind of context the implementation is,
 * must be consistent for each type and should not be set by the caller of a context
 * @property [key] is the unique identifier for the specific context, e.g. a user-id or workspace-id
 */
sealed interface Context {
    val kind: String
    val key: String
}

/**
 * Context for representing a workspace.
 *
 * @param [key] the unique identifying value of this workspace
 * @param [account] an optional account identifier
 */
data class Workspace(override val key: String, val account: String? = null) : Context {
    override val kind = "workspace"
}

/**
 * Context for representing a user.
 *
 * @param [key] the unique identifying value of this uer
 */
data class User(override val key: String) : Context {
    override val kind = "user"
}