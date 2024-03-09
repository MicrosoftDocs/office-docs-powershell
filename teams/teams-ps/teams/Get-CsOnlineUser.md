---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/get-csonlineuser
applicable: Microsoft Teams, Skype for Business Online
title: Get-CsOnlineUser
schema: 2.0.0
manager: sshastri
author: praspatil
ms.author: praspatil
ms.reviewer:
---

# Get-CsOnlineUser

## SYNOPSIS
Returns information about users who have accounts homed on Microsoft Teams or Skype for Business Online.

## SYNTAX

```
Get-CsOnlineUser [[-Identity] <UserIdParameter>]
 [-AccountType <String>]
 [-Credential <PSCredential>]
 [-DomainController <Fqdn>]
 [-Filter <String>]
 [-LdapFilter <String>]
 [-OnModernServer]
 [-OnOfficeCommunicationServer]
 [-OU <OUIdParameter>]
 [-ResultSize <Unlimited>]
 [-SkipUserPolicies]
 [-Sort]
 [-UnassignedUser]
 [-UsePreferredDC]
 [<CommonParameters>]
```

## DESCRIPTION
The Get-CsOnlineUser cmdlet returns information about users who have accounts homed on Microsoft Teams or Skype for Business Online.
The returned information includes standard Active Directory account information (such as the department the user works in, his or her address and phone number, etc.) as well as Skype for Business Server 2015 specific information: the Get-CsOnlineUser cmdlet returns information about such things as whether or not the user has been enabled for Enterprise Voice and which per-user policies (if any) have been assigned to the user.

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

### -------------------------- Example 1 --------------------------
```
Get-CsOnlineUser
```

The command shown in Example 1 returns information for all the users configured as online users.

### -------------------------- Example 2 --------------------------
```
Get-CsOnlineUser -Identity "sip:kenmyer@litwareinc.com"
```

In Example 2 information is returned for a single online user: the user with the SIP address "sip:kenmyer@litwareinc.com".

### -------------------------- Example 3 --------------------------
```
Get-CsOnlineUser -Filter "ArchivingPolicy -eq 'RedmondArchiving'"
```

Example 3 uses the Filter parameter to limit the returned data to online users who have been assigned the per-user archiving policy RedmondArchiving.

To do this, the filter value {ArchivingPolicy -eq "RedmondArchiving"} is employed; that syntax limits returned data to users where the ArchivingPolicy property is equal to (-eq) "RedmondArchiving".

### -------------------------- Example 4 --------------------------
```
Get-CsOnlineUser -Filter {HideFromAddressLists -eq $True}
```

Example 4 returns information only for user accounts that have been configured so that the account does not appear in Microsoft Exchange address lists.

(That is, the Active Directory attribute msExchHideFromAddressLists is True.) To carry out this task, the Filter parameter is included along with the filter value {HideFromAddressLists -eq $True}.

### -------------------------- Example 5 --------------------------
```
Get-CsOnlineUser -Filter {LineURI -eq "tel:+1234"}
Get-CsOnlineUser -Filter {LineURI -eq "tel:+1234,ext:"}
Get-CsOnlineUser -Filter {LineURI -eq "1234"}
```

Example 5 returns information for user accounts that have been assigned a designated phone number.

### -------------------------- Example 6 --------------------------
```
Get-CsOnlineUser -AccountType ResourceAccount
```

Example 6 returns information for user accounts that are categorized as resource accounts.

### -------------------------- Example 7 --------------------------
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
- `SfBOnPremUser` - to query for users that are hosted on-premises (available from January 31, 2023, in the latest TPM versions at that time).
- `Unknown` - to query for a user type that is not known.

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams, Skype for Business Online

Required: False
Position: 1
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
Applicable: Microsoft Teams, Skype for Business Online

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Credential
This parameter has been deprecated from the Teams PowerShell Modules version 3.0 or later as it is no longer relevant to Microsoft Teams.

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams, Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter has been deprecated from the Teams PowerShell Modules version 3.0 or later as it is no longer relevant to Microsoft Teams.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams, Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
Enables you to limit the returned data by filtering on specific attributes. For example, you can limit returned data to users who have been assigned a specific voice policy, or users who have not been assigned a specific voice policy.

The Filter parameter uses the same filtering syntax as the Where-Object cmdlet. For example, the following filter returns only users who have been enabled for Enterprise Voice: `-Filter 'EnterpriseVoiceEnabled -eq $True'` or ``-Filter "EnterpriseVoiceEnabled -eq `$True"``.

**Updates in Teams PowerShell Module version 5.9.0 and later**

The following updates are applicable for organizations having TeamsOnly users that use Microsoft Teams PowerShell version 5.9.0 or later in GCC High and DoD environments (note that these changes are already rolled out in commercial environments). These updates will be applicable to older Teams PowerShell versions from 15th March 2024 in GCC High and DoD environments:

_Performance_

The performance of Get-CsOnlineUser without the "-identity" parameter is improved. Here are some examples where significant improvement can be observed:

- Get-CsOnlineUser -Filter {AssignedPlan -like "*MCO*"}
- Get-CsOnlineUser -Filter {UserPrincipalName -like "test*" -and (AssignedPlans -eq "MCOEV" -or AssignedPlans -like "MCOPSTN*")}
- Get-CsOnlineUser -Filter {OnPremHostingProvider -ne $null}
- Get-CsOnlineUser -Filter {WhenChanged -gt "1/25/2022 11:59:59 PM"}

_New Filtering Attributes_

These attributes are now enabled for filtering:

- Alias
- City
- Company
- HostingProvider
- UserValidationErrors
- OnPremEnterpriseVoiceEnabled
- OnPremHostingProvider
- OnPremLineURI
- OnPremSIPEnabled
- SipAddress
- SoftDeletionTimestamp
- StateOrProvince
- Street
- TeamsOwnersPolicy
- WhenChanged
- WhenCreated
- FeatureTypes
- PreferredDataLocation
- LastName

_New Operators_

These filtering operators have been reintroduced:

`-like` operator now supports the use of wildcard operators in 'contains' and 'ends with' scenarios. For example:

- Contains Scenario: Get-CsOnlineUser  -Filter "DisplayName -like '*abc*'"
- Ends with scenario: Get-CsOnlineUser  -Filter {DisplayName -like '*abc'}

`-contains` can now be used to filter properties that are an array of strings like FeatureTypes, ProxyAddresses, and ShadowProxyAddresses. For example:

- Get-CsOnlineUser -Filter {FeatureTypes -contains "PhoneSystem"}
- Get-CsOnlineUser -Filter {ProxyAddresses -contains "SMTP:abc@xyz.com"}


`-gt` (greater than), `-lt` (less than), and `-le` (less than or equal to) can now be used for filtering all string properties. For example:

- Get-CsOnlineUser -Filter {UserPrincipalName -gt/-le/-lt "abc"}

`-ge` (greater than or equal to) can now also be used for filtering on policies. For example:

- Get-CsOnlineUser -Filter {ExternalAccessPolicy -ge "xyz_policy"}

**Note**: Some comparison operators mentioned above including -ge, -le, -gt, and -lt are case-sensitive for Policies and capital letters are considered smaller than small letters.


**Updates in Teams PowerShell Module version 3.0.0 and later**

The following updates are applicable for organizations having TeamsOnly users that use Microsoft Teams PowerShell version 3.0.0 and later (excluding updates mentioned previously for Teams PowerShell Module version 5.0.0 and later):

In the Teams PowerShell Module version 3.0.0 or later, filtering functionality is now limited to the following attributes:

- AccountType
- AccountEnabled
- AssignedPlan
- CallingLineIdentity
- Company
- Country
- Department
- DisplayName
- EnterpriseVoiceEnabled
- ExternalAccessPolicy
- FeatureTypes (new)
- GivenName
- Identity
- IsSipEnabled
- LastName (available in Teams PowerShell Module 4.2.1 and later)
- LineUri
- UserPrincipalName
- OnlineAudioConferencingRoutingPolicy
- OnlineDialOutPolicy
- OnlineVoicemailPolicy
- OnlineVoiceRoutingPolicy
- OwnerUrn
- TeamsAppPermissionPolicy
- TeamsAppSetupPolicy
- TeamsAudioConferencingPolicy
- TeamsCallHoldPolicy
- TeamsCallingPolicy
- TeamsCallParkPolicy
- TeamsChannelsPolicy
- TeamsComplianceRecordingPolicy
- TeamsCortanaPolicy
- TenantDialPlan
- TeamsEducationAssignmentsAppPolicy
- TeamsEmergencyCallingPolicy
- TeamsEmergencyCallRoutingPolicy
- TeamsFeedbackPolicy
- TeamsIPPhonePolicy
- TeamsMeetingBrandingPolicy
- TeamsMeetingBroadcastPolicy
- TeamsMeetingPolicy
- TeamsMessagingPolicy
- TeamsMobilityPolicy
- TeamsNotificationAndFeedsPolicy
- TeamsShiftsAppPolicy
- TeamsShiftsPolicy
- TeamsSurvivableBranchAppliancePolicy
- TeamsSyntheticAutomatedCallPolicy
- TeamsTargetingPolicy
- TeamsTemplatePermissionPolicy
- TeamsUpdateManagementPolicy
- TeamsUpgradeOverridePolicy
- TeamsUpgradePolicy
- TeamsVdiPolicy
- TeamsVerticalPackagePolicy
- TeamsVideoInteropServicePolicy
- TeamsWorkLoadPolicy
- Title
- UsageLocation
- UserDirSyncEnabled
- VoiceRoutingPolicy

*Attributes that have changed in meaning/format*:

**OnPremLineURI**: This attribute previously used to refer to both:

1. LineURI set via OnPrem AD.
2. Direct Routing numbers assigned to users via Set-CsUser.

In Teams PowerShell Module version 3.0.0 and later, the **OnPremLineURI** attribute refers only to the LineURI that's set via OnPrem AD. Previously, **OnPremLineURI** also referred to Direct Routing numbers that were assigned to users via the Set-CsUser cmdlet. OnPremLineUriManuallySet is now deprecated as OnPremLineURI is representative of the On-Prem assignment. Also, Direct Routing numbers are available in the **LineURI** attribute. You can distinguish Direct Routing Numbers from Calling Plan Numbers by looking at the **FeatureTypes** attribute.

In the Teams PowerShell Module version 3.0.0 or later, the format of the AssignedPlan and ProvisionedPlan attributes has changed from XML to JSON array. Previous XML filters (For example, `-Filter "AssignedPlan -eq '<some-xml-string>'"`) will no longer work. Instead, you need to update your filters to use one of the following formats:

- All users with an AssignedPlan that matches MCO: `-Filter "AssignedPlan -eq 'MCO'"`
- All users with an AssignedPlan that starts with MCO: `-Filter "AssignedPlan -like 'MCO*'"`
- All users with an AssignedPlan that contains MCO: `-Filter "AssignedPlan -like '*MCO*'"`
- All users with an AssignedPlan that ends with "MCO": `-Filter "AssignedPlan -like '*MCO'"`

**Policy Attributes**:

- PolicyProperty comparison works only when "Authority" is provided in the value. For ex: `-Filter "TeamsMessagingPolicy -eq '<Authority>:<Value>'"`
"Authority" can contain any of these two values: Host or Tenant for a policy type (configurations that are provided by default are referred to as Host configurations while admin-created configurations are considered Tenant configurations). The following are more examples:

- Filter "TeamsMessagingPolicy -eq 'Host:EduStudent'"
- Filter "TeamsMessagingPolicy -eq 'Tenant:TestDemoPolicy'"

- In the Teams PowerShell Module version 3.0.0 or later, the output format of Policies has now changed from String to JSON type UserPolicyDefinition.

- Filtering for null policies: Admins can query for users that do not have any policies assigned (null policies) by including an empty value in the query, for example, Get-csonlineuser -filter "TeamsMeetingBroadcastPolicy -eq ' ' "

_Change in Filter operators_:

The following filter syntaxes have been modified in Teams PowerShell Module 3.0.0 and later:

- -not, -lt, -gt: These operators have been dropped.
- -ge:  This operator is not supported with policy properties.
- -like: This operator is supported only with wildcard character in the end (e.g., `"like <value>*"`).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams, Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LdapFilter
This parameter has been deprecated from the Teams PowerShell Modules version 3.0 or later as it is no longer relevant to Microsoft Teams.

Enables you to limit the returned data by filtering on generic Active Directory attributes (that is, attributes that are not specific to Microsoft Teams or Skype for Business). For example, you can limit returned data to users who work in a specific department, or users who have a specified manager or job title.

The LdapFilter parameter uses the LDAP query language when creating filters. The LDAP filter syntax is `<ADattribute><Operator><Value>`. The following example returns only users who work in the city of Redmond (their `locality` attribute value is `Redmond`): `-LdapFilter "l=Redmond"`.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams, Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OnModernServer
This parameter has been deprecated from the Teams PowerShell Modules version 3.0 or later due to limited usage.

When present, the cmdlet returns a collection of users homed on Microsoft Teams or Skype for Business. Users with accounts on previous versions of the software will not be returned when you use this parameter.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: OnLyncServer
Applicable: Microsoft Teams, Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OnOfficeCommunicationServer
This parameter has been deprecated from the Teams PowerShell Modules version 3.0 or later as it is no longer relevant to Microsoft Teams.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams, Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OU
This parameter has been deprecated from the Teams PowerShell Modules version 3.0 or later as it is no longer relevant to Microsoft Teams.

```yaml
Type: OUIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams, Skype for Business Online

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
Applicable: Microsoft Teams, Skype for Business Online

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
Applicable: Microsoft Teams, Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Sort

Sorting will now be enabled in Teams PowerShell Module 5.9.0 and later by using the "-Sort" or "-OrderBy" parameters in GCC High and DoD environments. These updates will be applicable to older Teams PowerShell versions starting from 15th March 2024 in GCC High and DoD environments(note that this parameter is already rolled out in commercial environments). For example:

- Get-CsOnlineUser -Filter {LineURI -like *123*} -OrderBy "DisplayName asc"
- Get-CsOnlineUser -Filter {DisplayName -like '*abc'} -OrderBy {DisplayName desc}

**Note**: Sorting on few attributes like LineURI can be case-sensitive.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UnassignedUser
This parameter has been deprecated from the Teams PowerShell Modules version 3.0 or later due to limited usage.

Enables you to return a collection of all the users who have been enabled for Skype for Business but are not currently assigned to a Registrar pool.
Users are not allowed to log on to unless they are assigned to a Registrar pool.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams, Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UsePreferredDC

Reserved for Microsoft internal use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## OUTPUTS

### Notes

A recent fix has addressed an issue where some Guest users were being omitted from the output of the Get-CsOnlineUser cmdlet, resulting in an increase in the reported user count.

**Updates in Teams PowerShell Module version 6.0.0 and later**

The following updates are applicable for organizations having TeamsOnly users that use Microsoft Teams PowerShell version 6.0.0 or later.

- GracePeriodExpiryDate: GracePeriodExpiryDate attribute is being introduced within the AssignedPlan JSON array. It specifies the date when the grace period of a previously deleted license expires, and the license will be permanently deleted. The attribute remains empty/null for active licenses. (Note: The attribute is currently in private preview and will display valid values only for private preview)

- IsInGracePeriod: IsInGracePeriod attribute is a boolean flag that indicates that the associated plan is in grace period after deletion. (Note: The attribute is currently in private preview and will display valid values only for private preview)
  
**Updates in Teams PowerShell Module version 5.9.0 and later**

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

**Updates in Teams PowerShell Module version 3.0.0 and above**

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

## INPUTS

## NOTES

## RELATED LINKS

[Set-CsUser](Set-CsUser.md)
