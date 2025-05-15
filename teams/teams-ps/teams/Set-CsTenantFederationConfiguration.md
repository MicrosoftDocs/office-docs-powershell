---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/set-cstenantfederationconfiguration
applicable: Microsoft Teams
title: Set-CsTenantFederationConfiguration
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer: williamlooney
ms.date: 12/11/2024
---

# Set-CsTenantFederationConfiguration

## SYNOPSIS
> [!NOTE]
> Starting May 5, 2025, Skype Consumer Interoperability with Teams is no longer supported and the parameters AllowPublicUsers can no longer be used.

Manages federation configuration settings for your Skype for Business Online tenants.
These settings are used to determine which domains (if any) your users are allowed to communicate with.

## SYNTAX

### Identity (Default)
```
Set-CsTenantFederationConfiguration [-Tenant <Guid>]
 [-AllowedDomains <IAllowedDomainsChoice>] [-BlockedDomains <List>] [-BlockAllSubdomains <Boolean>]
 [-AllowFederatedUsers <Boolean>] [-AllowTeamsConsumer <Boolean>] [-AllowTeamsConsumerInbound <Boolean>]
 [-TreatDiscoveredPartnersAsUnverified <Boolean>] [-SharedSipAddressSpace <Boolean>] [-RestrictTeamsConsumerToExternalUserProfiles <Boolean>]
 [-AllowedDomainsAsAList <List>] [-ExternalAccessWithTrialTenants <ExternalAccessWithTrialTenantsType>]
 [-AllowedTrialTenantDomains <List>]
 [[-Identity] <XdsIdentity>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsTenantFederationConfiguration [-Tenant <Guid>] [-AllowedDomains <IAllowedDomainsChoice>]
 [-BlockedDomains <List>] [-BlockAllSubdomains <Boolean>] [-AllowFederatedUsers <Boolean>]
 [-TreatDiscoveredPartnersAsUnverified <Boolean>] [-SharedSipAddressSpace <Boolean>] [-RestrictTeamsConsumerToExternalUserProfiles <Boolean>]
 [-AllowedDomainsAsAList <List>] [-Instance <PSObject>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Federation is a service that enables users to exchange IM and presence information with users from other domains.
With Skype for Business Online, administrators can use the federation configuration settings to govern:

Whether or not users can communicate with people from other domains and if so, which domains they are allowed to communicate with.

Whether or not users can communicate with people who have accounts on public IM and presence providers such as Windows Live, Skype, or people using Microsoft Teams with an account that's not managed by an organization.

Administrators can use the `Set-CsTenantFederationConfiguration` cmdlet to enable and disable federation with other domains and federation with public providers.
In addition, this cmdlet can be used to expressly indicate the domains that users can communicate with and/or the domains that users are not allowed to communicate with.
However, administrators must use the `Set-CsTenantPublicProvider` cmdlet in order to indicate the public IM and presence providers that users can and cannot communicate with.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
$x = New-CsEdgeDomainPattern -Domain "fabrikam.com"

Set-CsTenantFederationConfiguration -BlockedDomains @{Replace=$x}
```

In Example 2, the domain fabrikam.com is assigned as the only domain on the blocked domains list for current tenant.
To do this, the first command in the example uses the `New-CsEdgeDomainPattern` cmdlet to create a new domain object for fabrikam.com.
This domain object is stored in a variable named $x.

The second command in the example then uses the `Set-CsTenantFederationConfiguration` cmdlet to update the blocked domains list.
Using the Replace method ensures that the existing blocked domains list will be replaced by the new list: a list that contains only the domain fabrikam.com.

### -------------------------- Example 3 --------------------------
```
$x = New-CsEdgeDomainPattern -Domain "fabrikam.com"

Set-CsTenantFederationConfiguration -BlockedDomains @{Remove=$x}
```

The commands shown in Example 3 remove fabrikam.com from the list of domains blocked by the current tenant.
To do this, the first command in the example uses the `New-CsEdgeDomainPattern` cmdlet to create a domain object for fabrikam.com.
The resulting domain object is then stored in a variable named $x.

The second command in the example then uses the `Set-CsTenantFederationConfiguration` cmdlet and the Remove method to remove fabrikam.com from the blocked domains list for the specified tenant.

### -------------------------- Example 4 --------------------------
```
$x = New-CsEdgeDomainPattern -Domain "fabrikam.com"

Set-CsTenantFederationConfiguration -BlockedDomains @{Add=$x}
```

The commands shown in Example 4 add the domain fabrikam.com to the list of domains blocked by the current tenant.
To add a new blocked domain, the first command in the example uses the `New-CsEdgeDomainPattern` cmdlet to create a domain object for fabrikam.com.
This object is stored in a variable named $x.

After the domain object has been created, the second command then uses the `Set-CsTenantFederationConfiguration` cmdlet and the Add method to add fabrikam.com to any domains already on the blocked domains list.

### -------------------------- Example 5 --------------------------
```
Set-CsTenantFederationConfiguration -BlockedDomains $Null
```

Example 5 shows how you can remove all the domains assigned to the blocked domains list for the current tenant.
To do this, simply include the BlockedDomains parameter and set the parameter value to null ($Null).
When this command completes, the blocked domain list will be cleared.

### -------------------------- Example 6 --------------------------
```
$list = New-Object Collections.Generic.List[String]
$list.add("contoso.com")
$list.add("fabrikam.com")
Set-CsTenantFederationConfiguration -AllowedDomainsAsAList $list
```

Example 6 shows how you can replace domains in the Allowed Domains using a List collection object.
First, a List collection is created and domains are added to it, then, simply include the AllowedDomainsAsAList parameter and set the parameter value to the List object.
When this command completes, the allowed domains list will be replaced with those domains.

### -------------------------- Example 7 --------------------------
```
$list = New-Object Collections.Generic.List[String]
$list.add("contoso.com")
$list.add("fabrikam.com")
Set-CsTenantFederationConfiguration -AllowedDomainsAsAList @{Add=$list}
```

Example 7 shows how you can add domains to the existing Allowed Domains using a List object.
First, a List is created and domains are added to it, then use the Add method in the AllowedDomainsAsAList parameter to add the domains to the existing allowed domains list. When this command completes, the domains in the list will be added to any domains already on the AllowedDomains list.

### -------------------------- Example 8 --------------------------
```
$list = New-Object Collections.Generic.List[String]
$list.add("contoso.com")
$list.add("fabrikam.com")
Set-CsTenantFederationConfiguration -AllowedDomainsAsAList @{Remove=$list}
```

Example 8 shows how you can remove domains from the existing Allowed Domains using a List object.
First, a List is created and domains are added to it, then use the Remove method in the AllowedDomainsAsAList parameter to remove the domains from the existing allowed domains list. When this command completes, the domains in the list will be removed from the AllowedDomains list.

### -------------------------- Example 9 --------------------------
```
Set-CsTenantFederationConfiguration -AllowTeamsConsumer $True -AllowTeamsConsumerInbound $False
```

The command shown in Example 9 enables communication with people using Teams with an account that's not managed by an organization, to only be initiated by people in your organization. This means that people using Teams with an account that's not managed by an organization will not be able to discover or start a conversation with people in your organization.

### -------------------------- Example 10 -------------------------
```
$list = New-Object Collections.Generic.List[String]
$list.add("contoso.com")
$list.add("fabrikam.com")
Set-CsTenantFederationConfiguration -BlockedDomains $list

Set-CsTenantFederationConfiguration -BlockAllSubdomains $True
```

Example 10 shows how you can block all subdomains of domains in BlockedDomains list.
In this example, all users from contoso.com and fabrikam.com will be blocked.
When the BlockAllSubdomains is enabled, all users from all subdomains of all domains in BlockedDomains list will also be blocked.
So, users from subdomain.contoso.com and subdomain.fabrikam.com will be blocked.
Note: Users from subcontoso.com will not be blocked because it's a completely different domain rather than a subdomain of contoso.com.

### -------------------------- Example 11 -------------------------
```
Set-CsTenantFederationConfiguration -ExternalAccessWithTrialTenants "Allowed"
```

Example 11 shows how you can allow users to communicate with users in tenants that contain only trial licenses (default value is Blocked).

### -------------------------- Example 12 --------------------------
```
$list = New-Object Collections.Generic.List[String]
$list.add("contoso.com")
$list.add("fabrikam.com")

Set-CsTenantFederationConfiguration -AllowedTrialTenantDomains $list
```

Using the `AllowedTrialTenantDomains` parameter, you can whitelist specific "trial-only" tenant domains, while keeping the `ExternalAccessWithTrialTenants` set to `Blocked`. Example 12 shows how you can set or replace domains in the Allowed Trial Tenant Domains using a List collection object.
First, a List collection is created and domains are added to it, then, simply include the `AllowedTrialTenantDomains` parameter and set the parameter value to the List object.
When this command completes, the Allowed Trial Tenant Domains list will be replaced with those domains.

### -------------------------- Example 13 --------------------------
```
Set-CsTenantFederationConfiguration -AllowedTrialTenantDomains @("contoso.com", "fabrikam.com")
```

Example 13 shows another way to set a value of `AllowedTrialTenantDomains`. It uses array of objects and it always replaces value of the `AllowedTrialTenantDomains`. When this command completes, the result is the same as in example 12.

The array of `AllowedTrialTenantDomains` can be emptied by running the following command: `Set-CsTenantFederationConfiguration -AllowedTrialTenantDomains @()`.

### -------------------------- Example 14 --------------------------
```
$list = New-Object Collections.Generic.List[String]
$list.add("contoso.com")

Set-CsTenantFederationConfiguration -AllowedTrialTenantDomains @{Add=$list}
```

Example 14 shows how you can add domains to the existing Allowed Trial Tenant Domains using a List collection object.
First, a List is created and domains are added to it, then, use the Add method in the `AllowedTrialTenantDomains` parameter to add the domains to the existing allowed domains list.
When this command completes, the domains in the list will be added to any domains already on the Allowed Trial Tenant Domains list.

### -------------------------- Example 15 --------------------------
```
$list = New-Object Collections.Generic.List[String]
$list.add("contoso.com")

Set-CsTenantFederationConfiguration -AllowedTrialTenantDomains @{Remove=$list}
```

Example 15 shows how you can remove domains from the existing Allowed Trial Tenant Domains using a List collection object.
First, a List is created and domains are added to it, then use the Remove method in the `AllowedTrialTenantDomains` parameter to remove the domains from the existing allowed domains list.
When this command completes, the domains in the list will be removed from the Allowed Trial Tenant Domains list.

## PARAMETERS

### -AllowedDomains
Domain objects (created by using the `New-CsEdgeAllowList` cmdlet or the `New-CsEdgeAllowAllKnownDomains` cmdlet) that represent the domains that users are allowed to communicate with.
If the `New-CsEdgeAllowAllKnownDomains` cmdlet is used then users can communicate with any domain that does not appear on the blocked domains list.
If the `New-CsEdgeAllowList` cmdlet is used then users can only communicate with domains that have been added to the allowed domains list.

Note that string values cannot be passed directly to the AllowedDomains parameter.
Instead, you must create an object reference using the `New-CsEdgeAllowList` cmdlet or the `New-CsEdgeAllowAllKnownDomains` cmdlet and then use the object reference variable as the parameter value.

The AllowedDomains parameter can support up to 4,000 domains.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowFederatedUsers
When set to True (the default value) users will be potentially allowed to communicate with users from other domains.
If this property is set to False then users cannot communicate with users from other domains regardless of the values assigned to the AllowedDomains and BlockedDomains properties.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowTeamsConsumer
Allows federation with people using Teams with an account that's not managed by an organization.

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

### -AllowTeamsConsumerInbound
Allows people using Teams with an account that's not managed by an organization, to discover and start communication with users in your organization. When -AllowTeamsConsumer is enabled and this parameter is disabled, only the users in your organization will be able to discover and start communication with people using Teams with an account that's not managed by an organization, but they will not discover and start communications with users in your organization.

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

### -BlockedDomains
If the AllowedDomains property has been set to AllowAllKnownDomains, then users will be allowed to communicate with users from any domain except domains that appear in the blocked domains list.
If the AllowedDomains property has not been set to AllowAllKnownDomains, then the blocked list is ignored, and users can only communicate with domains that have been expressly added to the allowed domains list.
The BlockedDomains parameter can support up to 4,000 domains.

```yaml
Type: List
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BlockAllSubdomains
If the BlockedDomains parameter is used, then BlockAllSubdomains can be used to activate all subdomains blocking.
If the BlockedDomains parameter is ignored, then BlockAllSubdomains is also ignored.
Just like for BlockedDomains, users will be disallowed from communicating with users from blocked domains.
But all subdomains for domains in this list will also be blocked.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might arise when running the command.

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

### -Identity
Specifies the collection of tenant federation configuration settings to be modified.
Because each tenant is limited to a single, global collection of federation settings there is no need include this parameter when calling the `Set-CsTenantFederationConfiguration` cmdlet.
If you do choose to use the Identity parameter you must also include the Tenant parameter.
For example:

`Set-CsTenantFederationConfiguration -Tenant "bf19b7db-6960-41e5-a139-2aa373474354" -Identity "global"`

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

```yaml
Type: PSObject
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SharedSipAddressSpace
When set to True, indicates that the users homed on Skype for Business Online use the same SIP domain as users homed on the on-premises version of Skype for Business Server.
The default value is False, meaning that the two sets of users have different SIP domains.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Globally unique identifier (GUID) of the tenant account whose federation settings are being modified.
For example:

`-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"`

You can return your tenant ID by running this command:

`Get-CsTenant | Select-Object DisplayName, TenantID`

If you are using a remote session of Windows PowerShell and are connected only to Skype for Business Online you do not have to include the Tenant parameter.
Instead, the tenant ID will automatically be filled in for you based on your connection information.
The Tenant parameter is primarily for use in a hybrid deployment.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TreatDiscoveredPartnersAsUnverified
When set to True, messages sent from discovered partners are considered unverified.
That means that those messages will be delivered only if they were sent from a person who is on the recipient's Contacts list.
The default value is False ($False).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowedDomainsAsAList
You can specify allowed domains using a List object that contains the domains that users are allowed to communicate with. See Examples section.

```yaml
Type: List
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalAccessWithTrialTenants
When set to 'Blocked', all external access with users from Teams subscriptions that contain only trial licenses will be blocked. This means users from these trial-only tenants will not be able to reach to your users via chats, Teams calls, and meetings (using the users authenticated identity) and your users will not be able to reach users in these trial-only tenants. If this setting is set to "Blocked", users from the trial-only tenant will also be removed from existing chats.

Allowed - Communication with other tenants is allowed based on other settings.

Blocked - Communication with users in tenants that contain only trial licenses will be blocked.

```yaml
Type: ExternalAccessWithTrialTenantsType
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowedTrialTenantDomains
You can whitelist specific "trial-only" tenant domains, while keeping the `ExternalAccessWithTrialTenants` set to `Blocked`. This will allow you to protect your organization against majority of tenants that don't have any paid subscriptions, while still being able to collaborate externally with those trusted trial-tenants in the list.

Note:
- The list supports up to maximum 4k domains.
- If `ExternalAccessWithTrialTenants` is set to `Allowed`, then the `AllowedTrialTenantDomains` list will not be checked.
- Any domain in this list that belongs to a tenant with paid subscriptions will be ignored.

```yaml
Type: List
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RestrictTeamsConsumerToExternalUserProfiles
Defines if a user is restriced to collaboration with Teams Consumer (TFL) user only in Extended Directory.
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

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
applicable: Microsoft Teams

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
The `Set-CsTenantFederationConfiguration` cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Edge.TenantFederationSettings object.

## OUTPUTS

### Output types
None.
Instead, the `Set-CsTenantFederationConfiguration` cmdlet modifies existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Edge.TenantFederationSettings object.

## NOTES

## RELATED LINKS

[Get-CsTenantFederationConfiguration](https://learn.microsoft.com/powershell/module/teams/get-cstenantfederationconfiguration)
