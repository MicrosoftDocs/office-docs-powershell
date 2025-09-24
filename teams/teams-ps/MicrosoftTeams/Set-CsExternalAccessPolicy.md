---
applicable: Microsoft Teams
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.reviewer: rogupta
online version: https://learn.microsoft.com/powershell/module/microsoftteams/set-csexternalaccesspolicy
schema: 2.0.0
title: Set-CsExternalAccessPolicy
---

# Set-CsExternalAccessPolicy

## SYNOPSIS
Enables you to modify the properties of an existing external access policy.

## SYNTAX

### Identity (Default)
```
Set-CsExternalAccessPolicy [[-Identity] <XdsIdentity>]
 [-AllowedExternalDomains <List>]
 [-BlockedExternalDomains <List>]
 [-CommunicationWithExternalOrgs <String>]
 [-Confirm]
 [-Description <String>]
 [-EnableAcsFederationAccess <Boolean>]
 [-EnableFederationAccess <Boolean>]
 [-EnableOutsideAccess <Boolean>]
 [-EnablePublicCloudAudioVideoAccess <Boolean>]
 [-EnableTeamsConsumerAccess <Boolean>]
 [-EnableTeamsConsumerInbound <Boolean>]
 [-EnableTeamsSmsAccess <Boolean>]
 [-EnableXmppAccess <Boolean>]
 [-FederatedBilateralChats <Boolean>]
 [-Force]
 [-RestrictTeamsConsumerAccessToExternalUserProfiles <Boolean>]
 [-Tenant <Guid>]
 [-WhatIf]
 [<CommonParameters>]
```

### Instance
```
Set-CsExternalAccessPolicy [-Instance <PSObject>]
 [-AllowedExternalDomains <List>]
 [-BlockedExternalDomains <List>]
 [-CommunicationWithExternalOrgs <String>]
 [-Confirm]
 [-Description <String>]
 [-EnableAcsFederationAccess <Boolean>]
 [-EnableFederationAccess <Boolean>]
 [-EnableOutsideAccess <Boolean>]
 [-EnablePublicCloudAudioVideoAccess <Boolean>]
 [-EnableTeamsConsumerAccess <Boolean>]
 [-EnableTeamsConsumerInbound <Boolean>]
 [-EnableTeamsSmsAccess <Boolean>]
 [-EnableXmppAccess <Boolean>]
 [-FederatedBilateralChats <Boolean>]
 [-Force]
 [-RestrictTeamsConsumerAccessToExternalUserProfiles <Boolean>]
 [-Tenant <Guid>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet was introduced in Lync Server 2010.

When you install Skype for Business Server your users are only allowed to exchange instant messages and presence information among themselves: by default, they can only communicate with people who have SIP accounts in your Active Directory Domain Services.
In addition, users are not allowed to access Skype for Business Server over the Internet; instead, they must be logged on to your internal network before they will be able to log on to Skype for Business Server.

That might be sufficient to meet your communication needs.
If it doesn't meet your needs, you can use external access policies to extend the ability of your users to communicate and collaborate.
External access policies can grant (or revoke) the ability of your users to do any or all of the following:

1. Communicate with people who have SIP accounts with a federated organization.
Note that enabling federation alone will not provide users with this capability.
Instead, you must enable federation and then assign users an external access policy that gives them the right to communicate with federated users.

2. (Microsoft Teams only) Communicate with users who are using custom applications built with [Azure Communication Services (ACS)](https://learn.microsoft.com/azure/communication-services/concepts/teams-interop). this policy setting only applies if acs federation has been enabled at the tenant level using the [Set-CsTeamsAcsFederationConfiguration](https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsacsfederationconfiguration) cmdlet.

3. Access Skype for Business Server over the Internet, without having to first log on to your internal network.
This enables your users to use Skype for Business and log on to Skype for Business Server from an Internet café or other remote location.

4. Communicate with people who have SIP accounts with a public instant messaging service such as Skype.

   The following parameters are not applicable to Skype for Business Online/Microsoft Teams: Description, EnableXmppAccess, Force, Identity, Instance, PipelineVariable, and Tenant

5. (Microsoft Teams Only) Communicate with people who are using Teams with an account that's not managed by an organization. This policy only applies if Teams Consumer Federation has been enabled at the tenant level using the [Set-CsTeamsAcsFederationConfiguration](https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsacsfederationconfiguration) cmdlet or Teams admin center under the External Access setting.

After an external access policy has been created, you can use the `Set-CsExternalAccessPolicy` cmdlet to change the property values of that policy.
For example, by default the global policy does not allow users to communicate with people who have accounts with a federated organization.
If you would like to grant this capability to all of your users you can call the `Set-CsExternalAccessPolicy` cmdlet and set the value of the global policy's EnableFederationAccess property to True. 

> [!NOTE]
> For the domain settings defined under `AllowFederatedUsers` to be applied, the value of the property `AllowedFederatedUsers` under `TenantFederationConfiguration` should be set to `True` for the Tenant.

## EXAMPLES

### Example 1
```
Set-CsExternalAccessPolicy -Identity RedmondExternalAccessPolicy -EnableFederationAccess $True
```

The command shown in Example 1 modifies the per-user external access policy that has the Identity RedmondExternalAccessPolicy.
In this example, the command changes the value of the EnableFederationAccess property to True.

### Example 2
```
Get-CsExternalAccessPolicy | Set-CsExternalAccessPolicy -EnableFederationAccess $True
```

In Example 2, federation access is enabled for all the external access policies configured for use in the organization.
To do this, the command first calls the `Get-CsExternalAccessPolicy` cmdlet without any parameters; this returns a collection of all the external policies currently configured for use.
That collection is then piped to the `Set-CsExternalAccessPolicy` cmdlet, which changes the value of the EnableFederationAccess property for each policy in the collection.

### Example 3
```
Get-CsExternalAccessPolicy -Filter tag:* | Set-CsExternalAccessPolicy -EnableFederationAccess $True
```

Example 3 enables federation access for all the external access policies that have been configured at the per-user scope.
To carry out this task, the first thing the command does is use the `Get-CsExternalAccessPolicy` cmdlet and the Filter parameter to return a collection of all the policies that have been configured at the per-user scope.
(The filter value "tag:*" limits returned data to policies that have an Identity that begins with the string value "tag:".
Any policy with an Identity that begins with "tag:" has been configured at the per-user scope.) The filtered collection is then piped to the `Set-CsExternalAccessPolicy` cmdlet, which modifies the EnableFederationAccess property for each policy in the collection.

### Example 4
```
Set-CsExternalAccessPolicy -Identity Global -EnableAcsFederationAccess $false
New-CsExternalAccessPolicy -Identity AcsFederationAllowed -EnableAcsFederationAccess $true
```

In this example, the Global policy is updated to disallow Teams-ACS federation for all users, then a new external access policy instance is created with Teams-ACS federation enabled and which can be assigned to selected users for which Team-ACS federation will be allowed.

### Example 5
```
Set-CsExternalAccessPolicy -Identity Global -EnableAcsFederationAccess $true
New-CsExternalAccessPolicy -Identity AcsFederationNotAllowed -EnableAcsFederationAccess $false
```

In this example, the Global policy is updated to allow Teams-ACS federation for all users, then a new external access policy instance is created with Teams-ACS federation disabled and which can then be assigned to selected users for which Team-ACS federation will not be allowed.

### Example 6
```
New-CsExternalAccessPolicy -Identity GranularFederationExample -CommunicationWithExternalOrgs "AllowSpecificExternalDomains" -AllowedExternalDomains @("example1.com", "example2.com")
```
In this example, we create an ExternalAccessPolicy named "GranularFederationExample" that allows communication with specific external domains, namely `example1.com` and `example2.com`. The federation policy is set to restrict communication to only these allowed domains.

## PARAMETERS

### -AllowedExternalDomains

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

> [!NOTE]
> Please note that this parameter is in Public Preview.

Specifies the external domains allowed to communicate with users assigned to this policy. This setting is applicable only when `CommunicationWithExternalOrgs` is configured to `AllowSpecificExternalDomains`. This setting can be modified only in custom policy. In Global (default) policy `CommunicationWithExternalOrgs` can only be set to `OrganizationDefault` and cannot be changed.
```yaml
Type: List
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BlockedExternalDomains

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

> [!NOTE]
> Please note that this parameter is in Public Preview.

Specifies the external domains blocked from communicating with users assigned to this policy. This setting is applicable only when `CommunicationWithExternalOrgs` is configured to `BlockSpecificExternalDomains`. This setting can be modified only in custom policy. In Global (default) policy `CommunicationWithExternalOrgs` can only be set to `OrganizationDefault` and cannot be changed.
```yaml
Type: List
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CommunicationWithExternalOrgs

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

> [!NOTE]
> Please note that this parameter is in Public Preview.

Indicates how the users get assigned by this policy can communicate with the external orgs. There are 5 options:

- OrganizationDefault: users follow the federation settings specified in `TenantFederationConfiguration`. This is the default value.
- AllowAllExternalDomains: users are allowed to communicate with all domains.
- AllowSpecificExternalDomains: users can communicate with external domains listed in `AllowedExternalDomains`.
- BlockSpecificExternalDomains: users are blocked from communicating with domains listed in `BlockedExternalDomains`.
- BlockAllExternalDomains: users cannot communicate with any external domains.

The setting is only applicable when `EnableFederationAccess` is set to true. This setting can only be modified in custom policies. In the Global (default) policy, it is fixed to `OrganizationDefault` and cannot be changed.
```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: OrganizationDefault
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Enables administrators to provide additional text to accompany the policy.
For example, the Description might include information about the users the policy should be assigned to.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableAcsFederationAccess

> Applicable: Microsoft Teams

Indicates whether Teams meeting organized by the user can be joined by users of customer applications built using Azure Communication Services (ACS). This policy setting only applies if ACS Teams federation has been enabled at the tenant level using the cmdlet Set-CsTeamsAcsFederationConfiguration.

Additionally, Azure Communication Services users would be able to call Microsoft 365 users that have assigned policies with enabled federation.

To enable for all users, use the Set-CsExternalAccessPolicy cmdlet to update the global policy, setting the value to True. It can be disabled for selected users by assigning them a policy with federation disabled.

To enable just for a selected set of users, use the Set-CsExternalAccessPolicy cmdlet to update the global policy, setting the value to False. Then assign selected users a policy with federation enabled.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Required: False
Position: Named
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableFederationAccess

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Indicates whether the user is allowed to communicate with people who have SIP accounts with a federated organization.
Read [Manage external access in Microsoft Teams](https://learn.microsoft.com/microsoftteams/manage-external-access) to get more information about the effect of this parameter in Microsoft Teams.
The default value is True.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableOutsideAccess

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Indicates whether the user is allowed to connect to Skype for Business Server over the Internet, without logging on to the organization's internal network.
The default value is False.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnablePublicCloudAudioVideoAccess

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Indicates whether the user is allowed to conduct audio/video conversations with people who have SIP accounts with a public Internet connectivity provider such as MSN.
When set to False, audio and video options in Skype for Business will be disabled any time a user is communicating with a public Internet connectivity contact.
The default value is False.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableTeamsConsumerAccess

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

(Microsoft Teams Only) Indicates whether the user is allowed to communicate with people who have who are using Teams with an account that's not managed by an organization.

To enable just for a selected set of users, use the Set-CsExternalAccessPolicy cmdlet to update the global policy, setting the value to False. Then assign selected users a policy with federation enabled.

Read [Manage external access in Microsoft Teams](https://learn.microsoft.com/microsoftteams/manage-external-access) to get more information about the effect of this parameter in Microsoft Teams.
The default value is True.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableTeamsConsumerInbound

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

(Microsoft Teams Only) Indicates whether the user is allowed to be discoverable by people who are using Teams with an account that's not managed by an organization. It also controls if people who have who are using Teams with an account that's not managed by an organization can start the communication with the user.

To enable just for a selected set of users, use the Set-CsExternalAccessPolicy cmdlet to update the global policy, setting the value to False. Then assign selected users a policy with federation enabled.

Read [Manage external access in Microsoft Teams](https://learn.microsoft.com/microsoftteams/manage-external-access) to get more information about the effect of this parameter in Microsoft Teams.
The default value is True.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableTeamsSmsAccess
Allows you to control whether users can have SMS text messaging capabilities within Teams.
Possible Values: True, False

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableXmppAccess

> Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Indicates whether the user is allowed to communicate with users who have SIP accounts with a federated XMPP (Extensible Messaging and Presence Protocol) partner.
The default value is False.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FederatedBilateralChats
This setting enables bi-lateral chats for the users included in the messaging policy.

Some organizations may want to restrict who users are able to message in Teams. While organizations have always been able to limit users' chats to only other internal users, organizations can now limit users' chat ability to only chat with other internal users and users in one other organization via the bilateral chat policy.

Once external access and bilateral policy is set up, users with the policy can be in external group chats only with a maximum of two organizations. When they try to create a new external chat with users from more than two tenants or add a user from a third tenant to an existing external chat, a system message will be shown preventing this action.

Users with bilateral policy applied are also removed from existing external group chats with more than two organizations.

This policy doesn't apply to meetings, meeting chats, or channels.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Suppresses the display of any non-fatal error message that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Unique identifier for the external access policy to be modified.
External access policies can be configured at the global, site, or per-user scopes.
To modify the global policy, use this syntax: `-Identity global`.
To modify a site policy, use syntax similar to this: `-Identity site:Redmond`.
To modify a per-user policy, use syntax similar to this: `-Identity SalesAccessPolicy`.
If this parameter is not specified then the global policy will be modified.

Note that wildcards are not allowed when specifying an Identity.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -RestrictTeamsConsumerAccessToExternalUserProfiles
Defines if a user is restriced to collaboration with Teams Consumer (TFL) user only in Extended Directory
Possible Values: True, False

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Globally unique identifier (GUID) of the Skype for Business Online tenant account for whom the external access policy is being modified.
For example:

`-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"`

You can return the tenant ID for each of your Skype for Business Online tenants by running this command:

`Get-CsTenant | Select-Object DisplayName, TenantID`

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Input types
Microsoft.Rtc.Management.WritableConfig.Policy.ExternalAccess.ExternalAccessPolicy object.
The `Set-CsExternalAccessPolicy` cmdlet accepts pipelined input of the external access policy object.

## OUTPUTS

### Output types
The `Set-CsExternalAccessPolicy` cmdlet does not return a value or object.
Instead, the cmdlet configures instances of the Microsoft.Rtc.Management.WritableConfig.Policy.ExternalAccess.ExternalAccessPolicy object.

## NOTES

## RELATED LINKS

[Get-CsExternalAccessPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/get-csexternalaccesspolicy)

[Grant-CsExternalAccessPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/grant-csexternalaccesspolicy)

[New-CsExternalAccessPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/new-csexternalaccesspolicy)

[Remove-CsExternalAccessPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/remove-csexternalaccesspolicy)
