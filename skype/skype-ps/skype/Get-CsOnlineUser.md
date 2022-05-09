---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/get-csonlineuser
applicable: Microsoft Teams, Skype for Business Online
title: Get-CsOnlineUser
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# Get-CsOnlineUser

## SYNOPSIS
Returns information about users who have accounts homed on Microsoft Teams or Skype for Business Online.

## SYNTAX

```
Get-CsOnlineUser [[-Identity] <UserIdParameter>]
 [-Credential <PSCredential>]
 [-DomainController <Fqdn>]
 [-Filter <String>]
 [-LdapFilter <String>]
 [-OnModernServer]
 [-OnOfficeCommunicationServer]
 [-OU <OUIdParameter>]
 [-ResultSize <Unlimited>]
 [-SkipUserPolicies]
 [-UnassignedUser]
 [-UsePreferredDC]
 [<CommonParameters>]
```

## DESCRIPTION
The Get-CsOnlineUser cmdlet returns information about users who have accounts homed on Microsoft Teams or Skype for Business Online.
The returned information includes standard Active Directory account information (such as the department the user works in, his or her address and phone number, etc.) as well as Skype for Business Server 2015 specific information: the Get-CsOnlineUser cmdlet returns information about such things as whether or not the user has been enabled for Enterprise Voice and which per-user policies (if any) have been assigned to the user.

Note that the Get-CsOnlineUser cmdlet does not have a TenantId parameter; that means you cannot use a command similar to this in order to limit the returned data to users who have accounts with a specific Microsoft Teams or Skype for Business Online tenant:

`Get-CsOnlineUser -TenantId "bf19b7db-6960-41e5-a139-2aa373474354"`

However, if you have multiple you can return users from a specified tenant by using the Filter parameter and a command similar to this:

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

## PARAMETERS

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

Using the the Teams PowerShell Module version version 2.5.1 or later, the the Get-CsOnlineUser command no longer includes deprecated properties in the output.

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

The following updates are applicable for organizations having TeamsOnly users that use Microsoft Teams PowerShell version 3.0.0 and later:

In the Teams PowerShell Module version 3.0.0 or later, filtering functionality is now limited to the following attributes:

- accountEnabled
- AssignedPlan
- Company
- Country
- department
- displayName
- EnterpriseVoiceEnabled
- ExternalAccessPolicy
- givenName
- Identity
- IsSipEnabled
- lineUri
- userPrincipalName
- CallingLineIdentity
- OnlineAudioConferencingRoutingPolicy
- OnlineDialOutPolicy
- OnlineVoicemailPolicy
- OnlineVoiceRoutingPolicy
- ownerUrn
- TeamsAppPermissionPolicy
- TeamsAppSetupPolicy
- TeamsAudioConferencingPolicy
- TeamsCallHoldPolicy
- TeamsCallingPolicy
- TeamsCallParkPolicy
- TeamsChannelsPolicy
- TeamsComplianceRecordingPolicy
- TeamsCortanaPolicy
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
- TenantDialPlan
- Title
- UsageLocation
- UserDirSyncEnabled
- TeamsWorkLoadPolicy
- VoiceRoutingPolicy
- LastName (available in Teams PowerShell Module 4.2.1 and later)

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

*Change in Filter operators*:

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
TThis parameter has been deprecated from the Teams PowerShell Modules version 3.0 or later as it is no longer relevant to Microsoft Teams.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters(https://go.microsoft.com/fwlink/?LinkID=113216).

## OUTPUTS

### Notes

The following updates are applicable for organizations having TeamsOnly users that use Microsoft Teams PowerShell version 3.0.0 and later:

*New user attributes*:

FeatureTypes – Array of unique strings specifying what features are enabled for a user. This attribute is an alternatitive to several attributes that have been dropped as outlined in the next section.
Some of the commonly used FeatureTypes include:

- Teams
- AudioConferencing
- PhoneSystem
- CallingPlan

AccountEnabled: Indicates whether a user is enabled for login in Azure AD.

*Dropped attributes*:

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

The following attributes are temporarily unavailable in the output when using the "-Filter" or when used without the "-Identity" parameter:
- SoftDeletionTimeStamp
- WhenChanged
- OnPremHostingProvider
- OnPremSipEnabled
- OnPremSipAddress
- OnPremOptionFlags
- OnPremEnterpriseVoiceEnabled
- CountryAbbreviation

**Note**: These attributes will be available in the near future.

*Attributes renamed*:

- ObjectId renamed to Identity
- FirstName renamed to GivenName
- DirSyncEnabled renamed to UserDirSyncEnabled
- MCOValidationErrors renamed to UserValidationErrors
- Enabled renamed to IsSipEnabled
- TeamsBranchSurvivabilityPolicy renamed to TeamsSurvivableBranchAppliancePolicy
- CountryOrRegionDisplayName introduced as Country (in versions 4.2.0 and later)

*Attributes that have changed in meaning/format*:

**OnPremLineURI**: This attribute previously used to refer to both:

1. LineURI set via OnPrem AD.
2. Direct Routing numbers assigned to users via Set-CsUser.

In Teams PowerShell Modules 3.0.0 and above OnPremLineURI will only refer to the LineURI set via OnPrem AD. Direct Routing numbers will be available from the LineURI field. Direct Routing Numbers can be distinguished from Calling Plan Numbers by looking at the FeatureTypes attribute.

- **The output format of AssignedPlan and ProvisionedPlan have now changed from XML to JSON array.**
- **The output format of Policies has now changed from String to JSON type UserPolicyDefinition.**

## INPUTS

## NOTES
The changes mentioned in these sections, including changes under "-Identity" and "-Filter" parameters, are not applicable to customers and tenants that are or have previously been enabled for Regionally Hosted Meetings for Skype for Business Online. 

## RELATED LINKS

[Set-CsUser](Set-CsUser.md)
