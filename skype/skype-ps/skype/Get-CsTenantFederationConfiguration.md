---
external help file: 
applicable: Skype for Business Online
title: Get-CsTenantFederationConfiguration
schema: 2.0.0
---

# Get-CsTenantFederationConfiguration

## SYNOPSIS
Returns information about the federation configuration settings for your Skype for Business Online tenants.
Federation configuration settings are used to determine which domains (if any) your users are allowed to communicate with.

## SYNTAX

```
Get-CsTenantFederationConfiguration [[-Identity] <Object>] [-BypassDualWrite <Object>] [-Filter <Object>]
 [-LocalStore] [-Tenant <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
Federation is a service that enables users to exchange IM and presence information with users from other domains.
With Skype for Business Online, administrators can use the federation configuration settings to govern:

Whether or not users can communicate with people from other domains and, if so, which domains they are allowed to communicate with.

Whether or not users can communicate with people who have accounts on public IM and presence providers such as Windows Live, AOL, and Yahoo.

The Get-CsTenantFederationConfiguration cmdlet provides a way for administrators to return federation information for their Skype for Business Online tenants.
This cmdlet can also be used to review the allowed and blocked lists, lists which are used to specify domains that users can and cannot communicate with.
However, administrators must use the Get-CsTenantPublicProvider cmdlet in order to see which public IM and presence providers users are allowed to communicate with.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsTenantFederationConfiguration
```

The command shown in Exercise 1 returns federation configuration information for the current tenant:

### -------------------------- Example 2 --------------------------
```
Get-CsTenantFederationConfiguration | Select-Object -ExpandProperty AllowedList
```

In Example 2, information is returned for all the domains found on the federation allowed list for the current tenant.
(The allowed list represents all the domains that the tenant is allowed to federate with.) To do this, the command first calls the Get-CsTenantFederationConfiguration cmdlet to return federation information for the specified tenant.
That information is then piped to the Select-Object cmdlet, which uses the ExpandProperty to "expand" the property AllowedList.
Expanding a property simply means displaying all the information stored in that property onscreen, and in an easy-to-read format.


## PARAMETERS

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

### -Filter
Enables you to use wildcard characters in order to return a collection of tenant federation configuration settings.
Because each tenant is limited to a single, global collection of federation configuration settings there is no need to use the Filter parameter.
However, this is valid syntax for the Get-CsTenantFederationConfiguration cmdlet:

`Get-CsTenantFederationConfiguration -Tenant "bf19b7db-6960-41e5-a139-2aa373474354" -Filter "g*"`

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

### -Identity
Specifies the collection of tenant federation configuration settings to be returned.
Because each tenant is limited to a single, global collection of federation settings there is no need include this parameter when calling the Get-CsTenantFederationConfiguration cmdlet.
If you do choose to use the Identity parameter you must also include the Tenant parameter.
For example:

`Get-CsTenantFederationConfiguration -Tenant "bf19b7db-6960-41e5-a139-2aa373474354" -Identity "global"`

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

### -LocalStore
This parameter is not used with Skype for Business Online.

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

### -Tenant
Globally unique identifier (GUID) of the tenant account whose federation settings are being returned.
For example:

`-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"`

You can return the tenant ID for each of your tenants by running this command:

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

### None


## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Settings.Edge.TenantFederationSettings


## NOTES


## RELATED LINKS

[Get-CsTenantPublicProvider]()

[Set-CsTenantFederationConfiguration]()