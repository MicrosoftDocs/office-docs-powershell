---
external help file: Microsoft.Rtc.Management.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/new-csexternalaccesspolicy
applicable: Microsoft Teams
title: New-CsExternalAccessPolicy
schema: 2.0.0
author: tomkau
ms.author: tomkau
ms.reviewer: rogupta
---

# New-CsExternalAccessPolicy

## SYNOPSIS

Enables you to create a new external access policy.

External access policies determine whether or not your users can: 1) communicate with users who have Session Initiation Protocol (SIP) accounts with a federated organization; 2) communicate with users who are using custom applications built with [Azure Communication Services](https://learn.microsoft.com/azure/communication-services/concepts/teams-interop); 3) access Skype for Business Server over the Internet, without having to log on to your internal network; 4) communicate with users who have SIP accounts with a public instant messaging (IM) provider such as Skype; and, 5) communicate with people who are using Teams with an account that's not managed by an organization.

This cmdlet was introduced in Lync Server 2010.

For information about external access in Microsoft Teams, see [Manage external access in Microsoft Teams](https://learn.microsoft.com/microsoftteams/manage-external-access) and [Teams and Skype interoperability](https://learn.microsoft.com/microsoftteams/teams-skype-interop) for specific details.

## SYNTAX

```powershell
New-CsExternalAccessPolicy [-Identity] <XdsIdentity>
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
 [-InMemory]
 [-RestrictTeamsConsumerAccessToExternalUserProfiles <Boolean>]
 [-Tenant <Guid>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION

When you install Skype for Business Server your users are only allowed to exchange instant messages and presence information among themselves: by default, they can only communicate with other people who have SIP accounts in your Active Directory Domain Services.
In addition, users are not allowed to access Skype for Business Server over the Internet; instead, they must be logged on to your internal network before they will be able to log on to Skype for Business Server.

That might be sufficient to meet your communication needs.
If it doesn't meet your needs you can use external access policies to extend the ability of your users to communicate and collaborate.
External access policies can grant (or revoke) the ability of your users to do any or all of the following:

1. Communicate with people who have SIP accounts with a federated organization.
Note that enabling federation alone will not provide users with this capability.
Instead, you must enable federation and then assign users an external access policy that gives them the right to communicate with federated users.

2. (Microsoft Teams only) Communicate with users who are using custom applications built with [Azure Communication Services (ACS)](https://learn.microsoft.com/azure/communication-services/concepts/teams-interop). this policy setting only applies if acs federation has been enabled at the tenant level using the cmdlet [Set-CsTeamsAcsFederationConfiguration](https://learn.microsoft.com/powershell/module/teams/set-csteamsacsfederationconfiguration).

3. Access Skype for Business Server over the Internet, without having to first log on to your internal network.
This enables your users to use Skype for Business and log on to Skype for Business Server from an Internet café or other remote location.

4. Communicate with people who have SIP accounts with a public instant messaging service such as Skype.

5. (Microsoft Teams Only) Communicate with people who are using Teams with an account that's not managed by an organization. This policy only applies if Teams Consumer Federation has been enabled at the tenant level using the cmdlet [Set-CsTenantFederationConfiguration](https://learn.microsoft.com/powershell/module/teams/set-cstenantfederationconfiguration) or Teams Admin Center under the External Access setting.

When you install Skype for Business Server, a global external access policy is automatically created for you.
In addition to the global policy, you can also create custom external access policies at either the site or the per-user scope.
If you create an external access policy at the site scope, that policy will automatically be assigned to the site upon creation.
If you create an external access policy at the per-user scope, that policy will be created but will not be assigned to any users.
To assign the policy to a user or group of users, use the Grant-CsExternalAccessPolicy cmdlet.

New external access policies can be created by using the New-CsExternalAccessPolicy cmdlet.
Note that these policies can only be created at the site or the per-user scope; you cannot create a new policy at the global scope.
In addition, you can have only one external access policy per site: if the Redmond site already has been assigned an external access policy you cannot create a second policy for the site.

The following parameters are not applicable to Skype for Business Online/Microsoft Teams: Description, EnableXmppAccess, Force, Identity, InMemory, PipelineVariable, and Tenant

## EXAMPLES

### -------------------------- EXAMPLE 1 --------------------------
```
New-CsExternalAccessPolicy -Identity site:Redmond -EnableFederationAccess $True -EnableOutsideAccess $True
```

The command shown in Example 1 creates a new external access policy that has the Identity site:Redmond; upon creation, this policy will automatically be assigned to the Redmond site.
Note that this new policy sets both the EnableFederationAccess and the EnableOutsideAccess properties to True.

### -------------------------- Example 2 ------------------------
```
Set-CsExternalAccessPolicy -Identity Global -EnableAcsFederationAccess $true
New-CsExternalAccessPolicy -Identity AcsFederationNotAllowed -EnableAcsFederationAccess $false
```

In this example, the Global policy is updated to allow Teams-ACS federation for all users, then a new external access policy instance is created with Teams-ACS federation disabled and which can then be assigned to selected users for which Team-ACS federation will not be allowed.

### -------------------------- Example 3 ------------------------
```
New-CsExternalAccessPolicy -Identity site:Redmond -EnableTeamsConsumerAccess $True -EnableTeamsConsumerInbound $False
```

The command shown in Example 3 creates a new external access policy that has the Identity site:Redmond; upon creation, this policy will automatically be assigned to the Redmond site.
Note that this new policy enables communication with people using Teams with an account that's not managed by an organization and limits this to only be initiated by people in your organization. This means that people using Teams with an account that's not managed by an organization will not be able to discover or start a conversation with people with this policy assigned.

### -------------------------- EXAMPLE 4 --------------------------
```
$x = New-CsExternalAccessPolicy -Identity RedmondAccessPolicy -InMemory

$x.EnableFederationAccess = $True

$x.EnableOutsideAccess = $True

Set-CsExternalAccessPolicy -Instance $x
```

Example 4 demonstrates the use of the InMemory parameter; this parameter enables you to create an in-memory-only instance of an external access policy.
After it has been created, you can modify the in-memory-only instance, then use the Set-CsExternalAccessPolicy cmdlet to transform the virtual policy into a real external access policy.

To do this, the first command in the example uses the New-CsExternalAccessPolicy cmdlet and the InMemory parameter to create a virtual policy with the Identity RedmondAccessPolicy; this virtual policy is stored in a variable named $x.
The next three commands are used to modify two properties of the virtual policy: EnableFederationAccess and the EnableOutsideAccess.
Finally, the last command uses the Set-CsExternalAccessPolicy cmdlet to create an actual per-user external access policy with the Identity RedmondAccessPolicy.
If you do not call the Set-CsExternalAccessPolicy cmdlet, then the virtual policy will disappear as soon as you end your Windows PowerShell session or delete the variable $x.
Should that happen, an external access policy with the Identity RedmondAccessPolicy will never be created.

### -------------------------- Example 5 ------------------------
```
New-CsExternalAccessPolicy -Identity GranularFederationExample -CommunicationWithExternalOrgs "AllowSpecificExternalDomains" -AllowedExternalDomains @("example1.com", "example2.com")
Set-CsTenantFederationConfiguration -CustomizeFederation $true
```

In this example, we create an ExternalAccessPolicy named "GranularFederationExample" that allows communication with specific external domains, namely `example1.com` and `example2.com`. The federation policy is set to restrict communication to only these allowed domains.

## PARAMETERS

### -Identity
Unique Identity to be assigned to the policy. New external access policies can be created at the site or per-user scope.

To create a new site policy, use the prefix "site:" and the name of the site as your Identity.

For example, use this syntax to create a new policy for the Redmond site: `-Identity site:Redmond.`

To create a new per-user policy, use an Identity similar to this: `-Identity SalesAccessPolicy.`

Note that you cannot create a new global policy; if you want to make changes to the global policy, use the Set-CsExternalAccessPolicy cmdlet instead.

Likewise, you cannot create a new site or per-user policy if a policy with that Identity already exists. If you need to make changes to an existing policy, use the Set-CsExternalAccessPolicy cmdlet.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowedExternalDomains
> [!NOTE]
> Please note that this parameter is in Private Preview.

Specifies the external domains allowed to communicate with users assigned to this policy. This setting is applicable only when `CommunicationWithExternalOrgs` is configured to `AllowSpecificExternalDomains`. This setting can be modified only in custom policy. In Global (default) policy `CommunicationWithExternalOrgs` can only be set to `OrganizationDefault` and cannot be changed.

```yaml
Type: List
Parameter Sets: (All)
Aliases:
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BlockedExternalDomains
> [!NOTE]
> Please note that this parameter is in Private Preview.

Specifies the external domains blocked from communicating with users assigned to this policy. This setting is applicable only when `CommunicationWithExternalOrgs` is configured to `BlockSpecificExternalDomains`. This setting can be modified only in custom policy. In Global (default) policy `CommunicationWithExternalOrgs` can only be set to `OrganizationDefault` and cannot be changed.

```yaml
Type: List
Parameter Sets: (All)
Aliases:
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CommunicationWithExternalOrgs
> [!NOTE]
> Please note that this parameter is in Private Preview.

Indicates how users assigned to the policy can communicate with external organizations (domains). This setting has 5 possible values:

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
Required: False
Position: Named
Default value: OrganizationDefault
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
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
Enables administrators to provide explanatory text to accompany the policy.
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
Indicates whether Teams meetings organized by the user can be joined by users of customer applications built using Azure Communication Services (ACS). This policy setting only applies if ACS Teams federation has been enabled at the tenant level using the cmdlet Set-CsTeamsAcsFederationConfiguration. Additionally, Azure Communication Services users would be able to call Microsoft 365 users that have assigned policies with enabled federation.

To enable for all users, use the Set-CsExternalAccessPolicy cmdlet to update the global policy, setting the value to True. It can be disabled for selected users by assigning them a policy with federation disabled.

To enable just for a selected set of users, use the Set-CsExternalAccessPolicy cmdlet to update the global policy, setting the value to False. Then assign selected users a policy with federation enabled.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: False
Position: Named
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableFederationAccess
Indicates whether the user is allowed to communicate with people who have SIP accounts with a federated organization.
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

### -EnableOutsideAccess
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
Indicates whether the user is allowed to conduct audio/video conversations with people who have SIP accounts with a public Internet connectivity provider such as MSN.
When set to False, audio and video options in Skype for Business Server will be disabled any time a user is communicating with a public Internet connectivity contact.

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

Possible values: True, False

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
> [!NOTE]
> Please note that this parameter is in Private Preview.

This setting enables bi-lateral chats for the users included in the messaging policy.

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

### -InMemory
Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set-\<cmdlet\>.

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

### -RestrictTeamsConsumerAccessToExternalUserProfiles
Defines if a user is restricted to collaboration with Teams Consumer (TFL) user only in Extended Directory

Possible values: True, False

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
Globally unique identifier (GUID) of the Skype for Business Online tenant account for whom the new external access policy is being created.
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
None.
The New-CsExternalAccessPolicy cmdlet does not accept pipelined input.

## OUTPUTS

### Output types
Creates new instances of the Microsoft.Rtc.Management.WritableConfig.Policy.ExternalAccess.ExternalAccessPolicy object.

### System.Object

## NOTES

## RELATED LINKS

[Get-CsExternalAccessPolicy](https://learn.microsoft.com/powershell/module/teams/get-csexternalaccesspolicy)

[Grant-CsExternalAccessPolicy](https://learn.microsoft.com/powershell/module/teams/grant-csexternalaccesspolicy)

[Remove-CsExternalAccessPolicy](https://learn.microsoft.com/powershell/module/teams/remove-csexternalaccesspolicy)

[Set-CsExternalAccessPolicy](https://learn.microsoft.com/powershell/module/teams/set-csexternalaccesspolicy)
