---
applicable: Microsoft Teams
author: praspatil
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: sshastri
Module Name: MicrosoftTeams
ms.author: praspatil
online version: https://learn.microsoft.com/powershell/module/teams/get-csonlineuser
schema: 2.0.0
title: Get-CsOnlineUser
---

# Get-CsOnlineUser

## SYNOPSIS
Returns information about users who have accounts homed on Microsoft Teams or Skype for Business Online.

## SYNTAX

```
Get-CsOnlineUser [[-Identity] <UserIdParameter>]
 [-AccountType <String>]
 [-Filter <String>]
 [-Properties <String>]
 [-ResultSize <Unlimited>]
 [-SkipUserPolicies]
 [-SoftDeletedUser]
 [-Sort]
 [<CommonParameters>]
```

## DESCRIPTION
The Get-CsOnlineUser cmdlet returns information about users who have accounts homed on Microsoft Teams
The returned information includes standard Active Directory account information (such as the department the user works in, his or her address and phone number, etc.): the Get-CsOnlineUser cmdlet returns information about such things as whether or not the user has been enabled for Enterprise Voice and which per-user policies (if any) have been assigned to the user.

Note that the Get-CsOnlineUser cmdlet does not have a TenantId parameter; that means you cannot use a command similar to this in order to limit the returned data to users who have accounts with a specific Microsoft Teams or Skype for Business Online tenant:

`Get-CsOnlineUser -TenantId "bf19b7db-6960-41e5-a139-2aa373474354"`

However, if you have multiple tenants you can return users from a specified tenant by using the Filter parameter and a command similar to this:

`Get-CsOnlineUser -Filter "TenantId -eq 'bf19b7db-6960-41e5-a139-2aa373474354'"`

That command will limit the returned data to user accounts belong to the tenant with the TenantId "bf19b7db-6960-41e5-a139-2aa373474354".
If you do not know your tenant IDs you can return that information by using this command:

`Get-CsTenant`

If you have a hybrid or "split domain" deployment (that is, a deployment in which some users have accounts homed on Skype for Business Online while other users have accounts homed on an on-premises version of Skype for Business Server 2015) keep in mind that the Get-CsOnlineUser cmdlet only returns information for Skype for Business Online users.
However, the cmdlet will return information for both online users and on-premises users.
If you want to exclude Skype for Business Online users from the data returned by the Get-CsUser cmdlet, use the following command:

`Get-CsUser -Filter "TenantId -eq '00000000-0000-0000-0000-000000000000'"`

By definition, users homed on the on-premises version will always have a TenantId equal to 00000000-0000-0000-0000-000000000000.
Users homed on Skype for Business Online will a TenantId that is equal to some value other than 00000000-0000-0000-0000-000000000000.

## EXAMPLES

### Example 1
```
Get-CsOnlineUser
```

The command shown in Example 1 returns information for all the users configured as online users.

### Example 2
```
Get-CsOnlineUser -Identity "sip:kenmyer@litwareinc.com"
```

In Example 2 information is returned for a single online user: the user with the SIP address "sip:kenmyer@litwareinc.com".

### Example 3
```
Get-CsOnlineUser -Filter "ArchivingPolicy -eq 'RedmondArchiving'"
```

Example 3 uses the Filter parameter to limit the returned data to online users who have been assigned the per-user archiving policy RedmondArchiving.

To do this, the filter value {ArchivingPolicy -eq "RedmondArchiving"} is employed; that syntax limits returned data to users where the ArchivingPolicy property is equal to (-eq) "RedmondArchiving".

### Example 4
```
Get-CsOnlineUser -Filter {HideFromAddressLists -eq $True}
```

Example 4 returns information only for user accounts that have been configured so that the account does not appear in Microsoft Exchange address lists.

(That is, the Active Directory attribute msExchHideFromAddressLists is True.) To carry out this task, the Filter parameter is included along with the filter value {HideFromAddressLists -eq $True}.

### Example 5
```
Get-CsOnlineUser -Filter {LineURI -eq "tel:+1234"}
Get-CsOnlineUser -Filter {LineURI -eq "tel:+1234,ext:"}
Get-CsOnlineUser -Filter {LineURI -eq "1234"}
```

Example 5 returns information for user accounts that have been assigned a designated phone number.

### Example 6
```
Get-CsOnlineUser -AccountType ResourceAccount
```

Example 6 returns information for user accounts that are categorized as resource accounts.

### Example 7
```
Get-CsOnlineUser -Filter "FeatureTypes -Contains 'PhoneSystem'"
```

Example 7 returns information for user's assigned plans.

## PARAMETERS

### -AccountType
This parameter is added to Get-CsOnlineUser starting from TPM 4.5.1 to indicate the user type. The possible values for the AccountType parameter are:

- `User` - to query for user accounts.
- `ResourceAccount` - to query for app endpoints or resource accounts.
- `Guest` - to query for guest accounts.
- `SfBOnPremUser` - to query for users that are hosted on-premises
- `IneligibleUser` - to query for a user that does not have valid Teams license (except Guest, ResourceAccount and SfbOnPremUser).

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
Enables you to limit the returned data by filtering on specific attributes. For example, you can limit returned data to users who have been assigned a specific voice policy, or users who have not been assigned a specific voice policy.

The Filter parameter uses the same filtering syntax as the Where-Object cmdlet. For example, the following filter returns only users who have been enabled for Enterprise Voice: `-Filter 'EnterpriseVoiceEnabled -eq $True'` or ``-Filter "EnterpriseVoiceEnabled -eq `$True"``.

Examples:
- Get-CsOnlineUser -Filter {AssignedPlan -like "*MCO*"}
- Get-CsOnlineUser -Filter {UserPrincipalName -like "test*" -and (AssignedPlans -eq "MCOEV" -or AssignedPlans -like "MCOPSTN*")}
- Get-CsOnlineUser -Filter {OnPremHostingProvider -ne $null}
- Get-CsOnlineUser -Filter {WhenChanged -gt "1/25/2022 11:59:59 PM"}

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Indicates the Identity of the user account to be retrieved.

For TeamsOnly customers using the Teams PowerShell Module version 3.0.0 or later, you use the following values to identify the account:

- GUID
- SIP address
- UPN
- Alias

Using the Teams PowerShell Module version 2.6 or earlier only, you can use the following values to identify the account:

- GUID
- SIP address
- UPN
- Alias
- Display name. Supports the asterisk ( \* ) wildcard character. For example, `-Identity "* Smith"` returns all the users whose display names end with Smith.

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Properties

Allows you to specify the properties you want to include in the output. Provide the properties as a comma-separated list. Identity, UserPrincipalName, Alias, AccountEnabled and DisplayName attributes will always be present in the output. Please note that only attributes available in the output of the Get-CsOnlineUser cmdlet can be selected. For a complete list of available attributes, refer to the response of the Get-CsOnlineUser cmdlet.

Examples:
- Get-CsOnlineUser -Properties DisplayName, UserPrincipalName, FeatureTypes
- Get-CsOnlineUser -Properties DisplayName, Alias, LineURI

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize

**Note**: Starting with Teams PowerShell Modules version 4.0 and later, "-ResultSize" type has been changed to uint32.

Enables you to limit the number of records returned by the cmdlet. For example, to return seven users (regardless of the number of users that are in your forest) include the ResultSize parameter and set the parameter value to 7. Note that there is no way to guarantee which seven users will be returned.

The result size can be set to any whole number between 0 and 2147483647, inclusive. The value 0 returns no data. If you set the ResultSize to 7 but you have only three users in your forest, the command will return those three users, and then complete without error.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipUserPolicies
PARAMVALUE: SwitchParameter

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SoftDeletedUser

This parameter enables you to return a collection of all the users who are deleted and can be restored within 30 days from their deletion time

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Sort

> Applicable: Microsoft Teams

Sorting is now enabled in Teams PowerShell Module by using the "-Sort" or "-OrderBy" parameters. For example:

- Get-CsOnlineUser -Filter {LineURI -like *123*} -OrderBy "DisplayName asc"
- Get-CsOnlineUser -Filter {DisplayName -like '*abc'} -OrderBy {DisplayName desc}

**Note**: Sorting on few attributes like LineURI can be case-sensitive.

```yaml
Type: String
Parameter Sets: (All)
Aliases: OrderBy

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

A recent fix has addressed an issue where some Guest users were being omitted from the output of the Get-CsOnlineUser cmdlet, resulting in an increase in the reported user count.

**Commonly used FeatureTypes and their descriptions:**

- Teams: Enables Users to access Teams
- AudioConferencing': Enables users to call-in to Teams meetings from their phones
- PhoneSystem: Enables users to place, receive, transfer, mute, unmute calls in Teams with mobile device, PC, or IP Phones
- CallingPlan: Enables an All-in-the-cloud voice solution for Teams users that connects Teams Phone System to the PSTN to enable external calling. With this option, Microsoft acts as the PSTN carrier.
- TeamsMultiGeo: Enables Teams chat data to be stored at rest in a specified geo location
- VoiceApp: Enables to set up resource accounts to support voice applications like Auto Attendants and Call Queues
- M365CopilotTeams: Enables Copilot in Teams
- TeamsProMgmt: Enables enhanced meeting recap features like AI generated notes and tasks from meetings, view when a screen was shared etc
- TeamsProProtection: Enables additional ways to safeguard and monitor users' Teams experiences with features like Sensitivity labels, Watermarking, end-to-end encryption etc.
- TeamsProWebinar: Enables advances webinar features like engagement reports, RTMP-In, Webinar Wait List, in Teams.
- TeamsProCust: Enables meeting customization features like branded meetings, together mode, in Teams.
- TeamsProVirtualAppt: Enables advances virtual appointment features like SMS notifications, custom waiting room, in Teams.
- TeamsRoomPro: Enables premium in-room meeting experience like intelligent audio, large galleries in Teams.
- TeamsRoomBasic: Enables core meeting experience with Teams Rooms Systems.
- TeamsAdvComms: Enables advances communication management like custom communication policies in Teams.
- TeamsMobileExperience: Enables users to use a single phone number in Teams across both sim-enabled mobile phone and desk lines.
- Conferencing_RequiresCommunicationCredits: Allows pay-per minute Audio Conferencing without monthly licenses.
- CommunicationCredits: Enables users to pay Teams calling and conferencing through the credits.

**Updates in Teams PowerShell Module verion 7.1.1 Preview and later**:

- EffectivePolicyAssignments: The EffectivePolicyAssignments attribute has been added to the Get-CsOnlineUser cmdlet in commercial environments. This new attribute provides information about a user's effective policy assignments. Each assignment includes the following details:
  - PolicyType - which specifies the type of policy assigned (for example, TeamsMeetingPolicy, TeamsCallingPolicy, and so on.)
  - PolicyAssignment - which includes the display name of the assigned policy (displayName), the assignment type (assignmentType) indicating whether it is direct or group-based, the unique identifier of the policy (policyId), and the group identifier (groupId) if applicable.
    **Note**: The policyId property isn't currently supported.

**Updates in Teams PowerShell Module**:

- DialPlan: DialPlan attribute will be deprecated and no longer populated in the output of Get-CsOnlineUser in all clouds.

**Updates in Teams PowerShell Module version 7.0.0 and later**:

- OptionFlags: OptionFlags attribute will no longer be populated with value in the output of Get-CsOnlineUser in all clouds. It's important to note that other details besides EnterpriseVoiceEnabled, previously found in OptionFlags, are no longer relevant for Teams. Administrators can still utilize the EnterpriseVoiceEnabled attribute in the output of the Get-CsOnlineUser cmdlet to get this information. This change will be rolled out to all Teams Powershell Module versions.

**Updates in Teams PowerShell Module version 6.9.0 and later**:

Adds new attribute in the output of Get-CsOnlineUser cmdlet in commercial environments.
  - TelephoneNumbers: A new list of complex object that includes telephone number and its corresponding assignment category. The assignment category can include values such as 'Primary', 'Private', and 'Alternate'.

Adds new parameter to the Get-CsOnlineUser cmdlet in all clouds:
  - Properties: Allows you to specify the properties you want to include in the output. Provide the properties as a comma-separated list. Note that the following properties will always be present in the output: Identity, UserPrincipalName, Alias, AccountEnabled, DisplayName.

**Updates in Teams PowerShell Module version 6.8.0 and later**:

New policies - TeamsBYODAndDesksPolicy, TeamsAIPolicy, TeamsWorkLocationDetectionPolicy, TeamsMediaConnectivityPolicy, TeamsMeetingTemplatePermissionPolicy, TeamsVirtualAppointmentsPolicy and TeamsWorkLoadPolicy will be visible in the Get-CsOnlineUser cmdlet output.

The following updates are applicable for organizations having TeamsOnly users that use Microsoft Teams PowerShell version 6.8.0 or later for Microsoft Teams operated by 21Vianet. These updates will be rolled out gradually to older Microsoft Teams PowerShell versions.

The following attributes are populated with correct values in the output of Get-CsOnlineUser when not using the "-identity" parameter:

- CountryAbbreviation
- UserValidationErrors
- WhenCreated

The following updates are applicable to the output in scenarios where "-identity" parameter is not used:

- Only valid OnPrem users would be available in the output: These are users that are DirSyncEnabled and have a valid OnPremSipAddress or SIP address in ShadowProxyAddresses.
- Guest are available in the output
- Unlicensed Users: Unlicensed users would show up in the output of Get-CsOnlineUser (note Unlicensed users in commercial clouds would show up in the output for only 30 days post-license removal.)
- Soft deleted users: These users will be displayed in the output of Get-CsOnlineUser and the TAC Manage Users page by default with SoftDeletionTimestamp set to a value.
- AccountType as Unknown will be renamed to AccountType as IneligibleUser in GCC High and DoD environments. IneligibleUser will include users who do not have any valid Teams licenses (except Guest, SfbOnPremUser, ResourceAccount).

If any information is required for a user that is not available in the output (when not using "-identity" parameter) then it can be obtained using the "-identity" parameter. Information for all users would be available using the "-identity" parameter until they are hard deleted.

If Guest, Soft Deleted Users, IneligibleUser are not required in the output then they can be filtered out by using filter on AccountType and SoftDeletionTimestamp. For example:

- Get-CsOnlineUser -Filter {AccountType -ne 'Guest'}
- Get-CsOnlineUser -Filter {SoftDeletionTimestamp -eq $null}
- Get-CsOnlineUser -Filter {AccountType -ne 'IneligibleUser'}

**Updates in Teams PowerShell Module version 6.1.1 Preview and later**:

The following updates are applicable for organizations that use Microsoft Teams PowerShell version 6.1.1 (Targeted Release: April 15th, 2024) or later. These changes will be gradually rolled out for all tenants starting from April 26th, 2024.

When using the Get-CsOnlineUser cmdlet in Teams PowerShell Module without the -identity parameter, we are introducing these updates:

- Before the rollout, unlicensed users who did not have a valid Teams license were displayed in the output of the Get-CsOnlineUser cmdlet for 30 days after license removal. After the rollout, Get-CsOnlineUser will show unlicensed users after the initial 30 days and also include unlicensed users who never had a valid Teams license.
- The AccountType value Unknown is being renamed to IneligibleUser, and will include users who do not have a valid Teams license (exceptions: Guest, SfbOnPremUser, and ResourceAccount).
- You can exclude users with the AccountType as IneligibleUser from the output with the AccountType filter. For example, Get-CsOnlineUser -Filter {AccountType -ne 'IneligibleUser'}

When Get-CsOnlineUser is used with the -identity parameter, you can also use UPN, Alias, and SIP Address with the -identity parameter to obtain the information for a specific unlicensed user.

**Updates in Teams PowerShell Module version 6.1.0 and later**:

The following updates are applicable for organizations that use Microsoft Teams PowerShell version 6.1.0 or later.

- LocationPolicy: LocationPolicy attribute is being deprecated from the output of Get-CsOnlineUser in all clouds. Get-CsPhoneNumberAssignment -IsoCountryCode can be used to get the LocationPolicy information. (Note: LocationPolicy attribute will no longer be populated with value in the older Teams Powershell Module versions (<6.1.0) starting from 20th March 2024.)

**Updates in Teams PowerShell Module version 6.0.0 and later**:

The following updates are applicable for organizations having TeamsOnly users that use Microsoft Teams PowerShell version 6.0.0 or later.

- GracePeriodExpiryDate: GracePeriodExpiryDate attribute is being introduced within the AssignedPlan JSON array. It specifies the date when the grace period of a previously deleted license expires, and the license will be permanently deleted. The attribute remains empty/null for active licenses. (Note: The attribute is currently in private preview and will display valid values only for private preview)

- IsInGracePeriod: IsInGracePeriod attribute is a boolean flag that indicates that the associated plan is in grace period after deletion. (Note: The attribute is currently in private preview and will display valid values only for private preview)

**Updates in Teams PowerShell Module version 5.9.0 and later**:

The following updates are applicable for organizations having TeamsOnly users that use Microsoft Teams PowerShell version 5.9.0 or later in GCC High and DoD environments (note that these changes are already rolled out in commercial environments). These updates will be applicable to older Teams PowerShell versions from 15th March 2024 in GCC High and DoD environments:

The following attributes are populated with correct values in the output of Get-CsOnlineUser when not using the "-identity" parameter:

- CountryAbbreviation
- UserValidationErrors
- WhenCreated

The following updates are applicable to the output in scenarios where "-identity" parameter is not used:

- Only valid OnPrem users would be available in the output: These are users that are DirSyncEnabled and have a valid OnPremSipAddress or SIP address in ShadowProxyAddresses.
- Guest are available in the output
- Unlicensed Users: Unlicensed users would show up in the output of Get-CsOnlineUser (note Unlicensed users in commercial clouds would show up in the output for only 30 days post-license removal.)
- Soft deleted users: These users will be displayed in the output of Get-CsOnlineUser and the TAC Manage Users page by default with SoftDeletionTimestamp set to a value.
- AccountType as Unknown will be renamed to AccountType as IneligibleUser in GCC High and DoD environments. IneligibleUser will include users who do not have any valid Teams licenses (except Guest, SfbOnPremUser, ResourceAccount).

If any information is required for a user that is not available in the output (when not using "-identity" parameter) then it can be obtained using the "-identity" parameter. Information for all users would be available using the "-identity" parameter until they are hard deleted.

If Guest, Soft Deleted Users, IneligibleUser are not required in the output then they can be filtered out by using filter on AccountType and SoftDeletionTimestamp. For example:

- Get-CsOnlineUser -Filter {AccountType -ne 'Guest'}
- Get-CsOnlineUser -Filter {SoftDeletionTimestamp -eq $null}
- Get-CsOnlineUser -Filter {AccountType -ne 'IneligibleUser'}

**Updates in Teams PowerShell Module version 3.0.0 and above**:

The following updates are applicable for organizations having TeamsOnly users that use Microsoft Teams PowerShell version 3.0.0 and later, excluding updates mentioned previously for Teams PowerShell Module version 5.0.0:

_New user attributes_:

FeatureTypes: Array of unique strings specifying what features are enabled for a user. This attribute is an alternative to several attributes that have been dropped as outlined in the next section.

Some of the commonly used FeatureTypes include:

- Teams
- AudioConferencing
- PhoneSystem
- CallingPlan

**Note**: This attribute is now filterable in Teams PowerShell Module versions 4.0.0 and later using the "-Contains" operator as shown in Example 7.

AccountEnabled: Indicates whether a user is enabled for login in Microsoft Entra ID.

_Dropped attributes_:

The following attributes are no longer relevant to Teams and have been dropped from the output:

- AcpInfo
- AdminDescription
- ArchivingPolicy
- AudioVideoDisabled
- BaseSimpleUrl
- BroadcastMeetingPolicy
- CallViaWorkPolicy
- ClientPolicy
- ClientUpdateOverridePolicy
- ClientVersionPolicy
- CloudMeetingOpsPolicy
- CloudMeetingPolicy
- CloudVideoInteropPolicy
- ContactOptionFlags
- CountryOrRegionDisplayName
- Description
- DistinguishedName
- EnabledForRichPresence
- ExchangeArchivingPolicy
- ExchUserHoldPolicies
- ExperiencePolicy
- ExternalUserCommunicationPolicy
- ExUmEnabled
- Guid
- HomeServer
- HostedVoicemailPolicy
- IPPBXSoftPhoneRoutingEnabled
- IPPhone
- IPPhonePolicy
- IsByPassValidation
- IsValid
- LegalInterceptPolicy
- LicenseRemovalTimestamp
- LineServerURI
- Manager
- MNCReady
- Name
- NonPrimaryResource
- ObjectCategory
- ObjectClass
- ObjectState
- OnPremHideFromAddressLists
- OriginalPreferredDataLocation
- OriginatingServer
- OriginatorSid
- OverridePreferredDataLocation
- PendingDeletion
- PrivateLine
- ProvisioningCounter
- ProvisioningStamp
- PublishingCounter
- PublishingStamp
- Puid
- RemoteCallControlTelephonyEnabled
- RemoteMachine
- SamAccountName
- ServiceInfo
- StsRefreshTokensValidFrom
- SubProvisioningCounter
- SubProvisioningStamp
- SubProvisionLineType
- SyncingCounter
- TargetRegistrarPool
- TargetServerIfMoving
- TeamsInteropPolicy
- ThumbnailPhoto
- UpgradeRetryCounter
- UserAccountControl
- UserProvisionType
- UserRoutingGroupId
- VoicePolicy - Alternative is the CallingPlan and PhoneSystem string in FeatureTypes
- XForestMovePolicy
- AddressBookPolicy
- GraphPolicy
- PinPolicy
- PreferredDataLocationOverwritePolicy
- PresencePolicy
- SmsServicePolicy
- TeamsVoiceRoute
- ThirdPartyVideoSystemPolicy
- UserServicesPolicy
- ConferencingPolicy
- Id
- MobilityPolicy
- OnlineDialinConferencingPolicy - Alternative is the AudioConferencing string in FeatureTypes
- Sid
- TeamsWorkLoadPolicy
- VoiceRoutingPolicy
- ClientUpdatePolicy
- HomePhone
- HostedVoiceMail
- MobilePhone
- OtherTelephone
- StreetAddress
- WebPage
- AssignedLicenses
- OnPremisesUserPrincipalName
- HostedVoiceMail
- LicenseAssignmentStates
- OnPremDomainName
- OnPremSecurityIdentifier
- OnPremSamAccountName
- CallerIdPolicy
- Fax
- LastName (available in Teams PowerShell Module 4.2.1 and later)
- Office
- Phone
- WindowsEmailAddress
- SoftDeletedUsers (available in Teams PowerShell Module 4.4.3 and later)

The following attributes are temporarily unavailable in the output when using the "-Filter" or when used without the "-Identity" parameter:

- WhenChanged
- CountryAbbreviation

**Note**: These attributes will be available in the near future.

_Attributes renamed_:

- ObjectId renamed to Identity
- FirstName renamed to GivenName
- DirSyncEnabled renamed to UserDirSyncEnabled
- MCOValidationErrors renamed to UserValidationErrors
- Enabled renamed to IsSipEnabled
- TeamsBranchSurvivabilityPolicy renamed to TeamsSurvivableBranchAppliancePolicy
- CountryOrRegionDisplayName introduced as Country (in versions 4.2.0 and later)
- InterpretedUserType: "AADConnectEnabledOnline" prefix for the InterpretedUserType output value has now been renamed DirSyncEnabledOnline, for example, AADConnectEnabledOnlineTeamsOnlyUser is now DirSyncEnabledOnlineTeamsOnlyUser.

_Attributes that have changed in meaning/format_:

**OnPremLineURI**: This attribute previously used to refer to both:

1. LineURI set via OnPrem AD.
2. Direct Routing numbers assigned to users via Set-CsUser.

In Teams PowerShell Modules 3.0.0 and above OnPremLineURI will only refer to the LineURI set via OnPrem AD. Direct Routing numbers will be available from the LineURI field. Direct Routing Numbers can be distinguished from Calling Plan Numbers by looking at the FeatureTypes attribute.

- **The output format of AssignedPlan and ProvisionedPlan have now changed from XML to JSON array.**
- **The output format of Policies has now changed from String to JSON type UserPolicyDefinition.**

## RELATED LINKS

[Set-CsUser](https://learn.microsoft.com/powershell/module/teams/set-csuser)
