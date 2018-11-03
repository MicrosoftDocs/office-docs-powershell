---
external help file: 
applicable: Skype for Business Online
title: Set-CsTenantFederationConfiguration
schema: 2.0.0
---

# Set-CsTenantFederationConfiguration

## SYNOPSIS
Manages federation configuration settings for your Skype for Business Online tenants.
These settings are used to determine which domains (if any) your users are allowed to communicate with.

## SYNTAX

```
Set-CsTenantFederationConfiguration [[-Identity] <Object>] [-AllowedDomains <Object>]
 [-AllowFederatedUsers <Object>] [-AllowPublicUsers <Object>] [-BlockedDomains <Object>]
 [-BypassDualWrite <Object>] [-Confirm] [-Force] [-Instance <Object>] [-SharedSipAddressSpace <Object>]
 [-Tenant <Object>] [-TreatDiscoveredPartnersAsUnverified <Object>] [-WhatIf] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
Federation is a service that enables users to exchange IM and presence information with users from other domains.
With Skype for Business Online, administrators can use the federation configuration settings to govern:

Whether or not users can communicate with people from other domains and if so, which domains they are allowed to communicate with.

Whether or not users can communicate with people who have accounts on public IM and presence providers such as Windows Live, AOL and Yahoo.

Administrators can use the `Set-CsTenantFederationConfiguration` cmdlet to enable and disable federation with other domains and federation with public providers.
In addition, this cmdlet can be used to expressly indicate the domains that users can communicate with and/or the domains that users are not allowed to communicate with.
However, administrators must use the `Set-CsTenantPublicProvider` cmdlet in order to indicate the public IM and presence providers that users can and cannot communicate with.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsTenantFederationConfiguration -AllowPublicUsers $False
```

The command shown in Example 1 disables communication with public providers for the current tenant.


### -------------------------- Example 2 --------------------------
```
$x = New-CsEdgeDomainPattern "fabrikam.com"

Set-CsTenantFederationConfiguration -BlockedDomains @{Replace=$x}
```

In Example 2, the domain fabrikam.com is assigned as the only domain on the blocked domains list for current tenant.
To do this, the first command in the example uses the `New-CsEdgeDomainPattern` cmdlet to create a new domain object for fabrikam.com.
This domain object is stored in a variable named $x.

The second command in the example then uses the `Set-CsTenantFederationConfiguration` cmdlet to update the blocked domains list.
Using the Replace method ensures that the existing blocked domains list will be replaced by the new list: a list that contains only the domain fabrikam.com.


### -------------------------- Example 3 --------------------------
```
$x = New-CsEdgeDomainPattern "fabrikam.com"

Set-CsTenantFederationConfiguration -BlockedDomains @{Remove=$x}
```

The commands shown in Example 3 remove fabrikam.com from the list of domains blocked by the current tenant.
To do this, the first command in the example uses the `New-CsEdgeDomainPattern` cmdlet to create a domain object for fabrikam.com.
The resulting domain object is then stored in a variable named $x.

The second command in the example then uses the `Set-CsTenantFederationConfiguration` cmdlet and the Remove method to remove fabrikam.com from the blocked domains list for the specified tenant.


### -------------------------- Example 4 --------------------------
```
$x = New-CsEdgeDomainPattern "fabrikam.com"

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


## PARAMETERS

### -AllowedDomains
Domain objects (created by using the `New-CsEdgeAllowList` cmdlet or the `New-CsEdgeAllowAllKnownDomains` cmdlet) that represent the domains that users are allowed to communicate with.
If the `New-CsEdgeAllowAllKnownDomains` cmdlet is used then users can communicate with any domain that does not appear on the blocked domains list.
If the `New-CsEdgeAllowList` cmdlet is used then users can only communicate with domains that have been added to the allowed domains list.

Note that string values cannot be passed directly to the AllowedDomains parameter.
Instead, you must create an object reference using the `New-CsEdgeAllowList` cmdlet or the `New-CsEdgeAllowAllKnownDomains` cmdlet and then use the object reference variable as the parameter value.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

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
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowPublicUsers
When set to True (the default value) users will be potentially allowed to communicate with users who have accounts on public IM and presence providers such as Windows Live, Yahoo, and AOL.
The collection of public providers that users can actually communicate with is managed by using the `Set-CsTenantPublicProvider` cmdlet.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BlockedDomains
If the AllowedDomains property has been set to AllowAllKnownDomains, then users will be allowed to communicate with users from any domain except domains that appear in the blocked domains list.
If the AllowedDomains property has not been set to AllowAllKnownDomains, then the blocked list is ignored, and users can only communicate with domains that have been expressly added to the allowed domains list.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassDualWrite
PARAMVALUE: $true | $false

```yaml
Type: Object
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
Applicable: Skype for Business Online

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
Applicable: Skype for Business Online

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
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SharedSipAddressSpace
When set to True, indicates that the users homed on Skype for Business Online use the same SIP domain as users homed on the on-premises version of Skype for Business Server.
The default value is False, meaning that the two sets of users gave have different SIP domains.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

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
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

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
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

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
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AsJob
{{Fill AsJob Description}}

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
The `Set-CsTenantFederationConfiguration` cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Edge.TenantFederationSettings object.

## OUTPUTS

###  
None.
Instead, the `Set-CsTenantFederationConfiguration` cmdlet modifies existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Edge.TenantFederationSettings object.

## NOTES

## RELATED LINKS

[Get-CsTenantFederationConfiguration](Get-CsTenantFederationConfiguration.md)

[Get-CsTenantPublicProvider](Get-CsTenantPublicProvider.md)

