---
external help file: 
applicable: Skype for Business Online
title: Get-CsTenantHybridConfiguration
schema: 2.0.0
---

# Get-CsTenantHybridConfiguration

## SYNOPSIS
Returns values for the hybrid configuration settings that enable users homed on Skype for Business Online to have access to Enterprise Voice features such as media bypass, Enhanced 9-1-1, and call parking.
A hybrid scenario (also known as a split-domain scenario) is a Skype for Business Server deployment in which some users have accounts homed on-premises while other users have accounts homed on Skype for Business Online.

## SYNTAX

```
Get-CsTenantHybridConfiguration [[-Identity] <Object>] [-BypassDualWrite <Object>] [-Filter <Object>]
 [-LocalStore] [-Tenant <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
In a hybrid or "split domain" deployment, an organization has some users who have accounts homed on Skype for Business Online while simultaneously having other users who have accounts homed on the on-premises version of Skype for Business Server.
By default, users homed on Skype for Business Online do not have access to the complete range of capabilities offered by Enterprise Voice; that's because the Skype for Business Server servers do not have direct access to Skype for Business Online deployment and network configuration information.
Among other things, Skype for Business Online users do not have default access to such things as:

Enhanced 9-1-1, the service used for making emergency phone calls.

Call parking, the service that enables users to place a call on hold phone A, then retrieve that call from phone B.

Media bypass, which enables calls to and from the public switched telephone network (PSTN) to bypass the Mediation server, helping to minimize transcoding and network latency.

PSTN conferencing dial-in and dial-out, which enables users to participate in the audio portion of an online conference by using any PSTN telephone or mobile device.

The Response Group application, which provides a way for you to automatically route phone calls to entities such as a help desk or customer support line.
By default, Skype for Business Online users cannot function as Response Group agents.

In order to provide Skype for Business Online users with access to these Enterprise Voice capabilities, administrators need to assign the appropriate values to hybrid configuration settings such as the internal and external Web service URLs and the fully qualified domain name of the organization's Access Edge server.
These values, which can only be configured by using the Set-CsTenantHybridConfiguration cmdlet, provide the Skype for Business Online servers with the information needed to make use of these advanced Enterprise Voice features.

You can return information about the tenant hybrid configuration settings currently in use in your organization by using the Get-CsTenantHybridConfiguration cmdlet.

Hybrid PSTN sites are created, retrieved, modified, and deleted by the CsHybridPSTNSite cmdlet group (New, Get, Set, and Remove .) The hybrid PSTN sites can be reviewed in your hybrid configuration by using the Get-CsTenantHybridConfiguration cmdlet.
However, you can't create or modify hybrid PSTN sites through the CsTenantHybridConfiguration cmdlets, you must use the CsHybridPSTNSite cmdlets to manage hybrid PSTN sites.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsTenantHybridConfiguration -Identity "Global"
```

The command shown in Example 1 returns the property values for the global collection of tenant hybrid configuration settings.

### -------------------------- Example 2 --------------------------
```
Get-CsTenantHybridConfiguration -Tenant "bf19b7db-6960-41e5-a139-2aa373474354"
```

In Example 2, property values are returned for the custom tenant hybrid configuration settings applied to the tenant with the TenantId "bf19b7db-6960-41e5-a139-2aa373474354".


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
Enables you to use wildcard characters in order to return a collection of tenant hybrid configuration settings.
Because you are limited to a single, global collection of hybrid configuration settings there is no need to use the Filter parameter.
However, this is valid syntax for the Get-CsTenantHybridConfiguration cmdlet:

`Get-CsTenantHybridConfiguration -Filter "g*"`

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
Unique Identity of the tenant hybrid configuration settings to be returned.
Because you are limited to a single, global collection of hybrid configuration settings, the only collection that can be returned by using the Identity parameter is the global collection:

`-Identity global`

To modify the settings for an individual tenant, use the Tenant parameter instead of the Identity parameter.

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
Specifies the global unique identifier (GUID) of the Skype for Business Online tenant account on which the cmdlet will operate.
For example: -Tenant "38aad667-af54-4397-aaa7-e94c79ec2308".

You can find the tenant ID for your Skype for Business Online tenants by running this command: Get-CsTenant | Select-Object DisplayName, TenantID

If you are using a remote session of Windows PowerShell and are connected only to Skype for Business Online you do not have to include the Tenant parameter.
Instead, the tenant ID will be determined by your connection and credentials.
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

### Microsoft.Rtc.Management.WritableConfig.Settings.HybridConfiguration.TenantHybridConfiguration


## NOTES


## RELATED LINKS

[Set-CsTenantHybridConfiguration](Set-CsTenantHybridConfiguration.md)
