---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: Set-CsTenantHybridConfiguration
schema: 2.0.0
---

# Set-CsTenantHybridConfiguration

## SYNOPSIS
Used in a hybrid scenario to give users homed on Skype for Business Online access to on-premises Enterprise Voice features such as media bypass, Enhanced 9-1-1, and call parking.
A hybrid scenario (also known as a split-domain scenario) is a deployment in which some users have accounts homed on-premises while other users have accounts homed on Skype for Business Online.

## SYNTAX

```
Set-CsTenantHybridConfiguration [[-Identity] <Object>] [-BypassDualWrite <Object>] [-Confirm] [-Force]
 [-HybridConfigServiceExternalUrl <Object>] [-HybridConfigServiceInternalUrl <Object>] [-Instance <Object>]
 [-PeerDestination <Object>] [-Tenant <Object>] [-UseOnPremDialPlan <Object>] [-WhatIf] [-AsJob]
 [<CommonParameters>]
```

## DESCRIPTION
In a hybrid or "split domain" deployment, an organization has some users who have accounts homed on Skype for Business Server while simultaneously having other users who have accounts homed on Skype for Business Online.
By default, users homed on Skype for Business Online do not have access to the complete range of capabilities offered by Enterprise Voice; that's because the Skype for Business Online servers do not have direct access to the on-premises server deployment and network configuration information.
Among other things, that means that Skype for Business Online users do not have default access to such things as:

Enhanced 9-1-1, the service used for making emergency phone calls.

Call parking, service which enables users to place a call on hold phone A, then retrieve that call from phone B.

Media bypass, which enables calls to and from the public switched telephone network (PSTN) to bypass the Mediation server, helping to minimize transcoding and network latency.

PSTN conferencing dial-in and dial-out, which enables users to participate in the audio portion of an online conference by using any PSTN telephone or mobile device.

The Response Group application, which provides a way for you to automatically route phone calls to entities such as a help desk or customer support line.
By default, Skype for Business Online users cannot function as Response Group agents.

In order to provide online users with access to these Enterprise Voice capabilities, administrators need to assign the appropriate values to hybrid configuration settings such as the internal and external Web service URLs and the fully qualified domain name of the organization's Access Edge server.
These values, which can only be configured by using the `Set-CsTenantHybridConfiguration` cmdlet, provide the Skype for Business Online servers with the information needed to make use of these advanced Enterprise Voice features.

Hybrid PSTN sites are created, retrieved, modified, and deleted by the CsHybridPSTNSite cmdlet group (New, Get, Set and Remove). The hybrid PSTN sites can be reviewed in your hybrid configuration by using the `Get-CsTenantHybridConfiguration` cmdlet.
However, you can't create or modify hybrid PSTN sites through the CsTenantHybridConfiguration cmdlets, you must use the CsHybridPSTNSite cmdlets to manage hybrid PSTN sites.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsTenantHybridConfiguration -HybridConfigServiceInternalUrl "https://internal.litwareinc.com"
```

The command shown in Example 1 sets the internal service URL for the global collection of tenant hybrid configuration settings.


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

### -HybridConfigServiceExternalUrl
External Web service URL.

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

### -HybridConfigServiceInternalUrl
Internal Web service URL.

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
Unique Identity of the tenant hybrid configuration settings to be modified.
Because you are limited to a single, global collection of hybrid configuration settings, the only collection that can be modified by using the Identity parameter is the global collection:

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

### -PeerDestination
Fully qualified domain name of your on-premises Access Edge server.

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
Specifies the global unique identifier (GUID) of the Skype for Business Online tenant account on which the cmdlet will operate.
For example: `-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"`.

You can find the tenant ID for your Skype for Business Online tenants by running this command: `Get-CsTenant | Select-Object DisplayName, TenantID`

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

### -UseOnPremDialPlan
If set to $true, hybrid users will use the dial plan defined for your on-premises Skype for Business Server organization.
If set to $false, hybrid users will use the dial plan defined for your Skype for Business Online organization.
The default is $true.

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
None.
The `Set-CsTenantHybridConfiguration` cmdlet does not accept pipelined input.

## OUTPUTS

###  
None.

## NOTES

## RELATED LINKS

[Get-CsTenantHybridConfiguration](Get-CsTenantHybridConfiguration.md)

