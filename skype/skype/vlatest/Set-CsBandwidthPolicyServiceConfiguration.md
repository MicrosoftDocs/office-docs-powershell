---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsBandwidthPolicyServiceConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Modifies an existing bandwidth policy service configuration.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Modifies an existing bandwidth policy service configuration.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Set-CsBandwidthPolicyServiceConfiguration [[-Identity] <XdsIdentity>] [-EnableLogging <Boolean>]
 [-LogCleanUpInterval <TimeSpan>] [-MaxLogFileSizeMb <UInt32>] [-MaxTokenLifetime <TimeSpan>] [-Force]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsBandwidthPolicyServiceConfiguration [-Instance <PSObject>] [-EnableLogging <Boolean>]
 [-LogCleanUpInterval <TimeSpan>] [-MaxLogFileSizeMb <UInt32>] [-MaxTokenLifetime <TimeSpan>] [-Force]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Call admission control (CAC) is a way of determining whether to allow real-time communications sessions, such as voice or video calls, to be established based on bandwidth constraints.
Within the Microsoft Lync Server 2010 implementation of CAC, regions, sites, and subnets are defined within a network along with the relationships and links between those entities in order to place bandwidth constraints between them.
Bandwidth Policy service is the component that performs CAC functionality in the Lync Server 2010 deployment, enabling the decision as to whether sufficient bandwidth exists for a call to be established.
This cmdlet modifies an existing bandwidth policy service configuration.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsBandwidthPolicyServiceConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsBandwidthPolicyServiceConfiguration"}

**Below Content Applies To:** Lync Server 2013

Call admission control (CAC) is a way of determining whether to allow real-time communications sessions, such as voice or video calls, to be established based on bandwidth constraints.
Within the Lync Server implementation of CAC, regions, sites, and subnets are defined within a network along with the relationships and links between those entities in order to place bandwidth constraints between them.
Bandwidth Policy service is the component that performs CAC functionality in the Lync Server deployment, enabling the decision as to whether sufficient bandwidth exists for a call to be established.
This cmdlet modifies an existing bandwidth policy service configuration.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsBandwidthPolicyServiceConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsBandwidthPolicyServiceConfiguration"}

**Below Content Applies To:** Skype for Business Server 2015

Call admission control (CAC) is a way of determining whether to allow real-time communications sessions, such as voice or video calls, to be established based on bandwidth constraints.
Within the Skype for Business Server 2015 implementation of CAC, regions, sites, and subnets are defined within a network along with the relationships and links between those entities in order to place bandwidth constraints between them.
Bandwidth Policy service is the component that performs CAC functionality in the Skype for Business Server 2015 deployment, enabling the decision as to whether sufficient bandwidth exists for a call to be established.
This cmdlet modifies an existing bandwidth policy service configuration.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Set-CsBandwidthPolicyServiceConfiguration -Identity site:Redmond -EnableLogging $true -MaxTokenLifetime 3:00:00 -LogCleanUpInterval 5.00:00:00
```

This example modifies the bandwidth policy service configuration for the site Redmond (-Identity site:Redmond).
The configuration is modified to enable logging, change the maximum lifetime of a token to three hours, and the number of days before log cleanup to five days.
This is all accomplished in this one command.
To enable logging, the EnableLogging parameter is set to True ($true).
Next the MaxTokenLifetime parameter receives a value of 3:00:00, which represents three hours.
Finally, the LogCleanUpInterval parameter receives a value of 5.00:00:00, which signifies five days.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

This example modifies the bandwidth policy service configuration for the site Redmond (-Identity site:Redmond).
The configuration is modified to enable logging, change the maximum lifetime of a token to three hours, and the number of days before log cleanup to five days.
This is all accomplished in this one command.
To enable logging, the EnableLogging parameter is set to True ($true).
Next the MaxTokenLifetime parameter receives a value of 3:00:00, which represents three hours.
Finally, the LogCleanUpInterval parameter receives a value of 5.00:00:00, which signifies five days.

Set-CsBandwidthPolicyServiceConfiguration -Identity site:Redmond -EnableLogging $true -MaxTokenLifetime 3:00:00 -LogCleanUpInterval 5.00:00:00

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

This example modifies the bandwidth policy service configuration for the site Redmond (-Identity site:Redmond).
The configuration is modified to enable logging, change the maximum lifetime of a token to three hours, and the number of days before log cleanup to five days.
This is all accomplished in this one command.
To enable logging, the EnableLogging parameter is set to True ($true).
Next the MaxTokenLifetime parameter receives a value of 3:00:00, which represents three hours.
Finally, the LogCleanUpInterval parameter receives a value of 5.00:00:00, which signifies five days.

Set-CsBandwidthPolicyServiceConfiguration -Identity site:Redmond -EnableLogging $true -MaxTokenLifetime 3:00:00 -LogCleanUpInterval 5.00:00:00

## PARAMETERS

### -Identity
The unique identifier of the configuration you want to change.
This identifier will consist of the scope (for the global configuration) or the scope and name (for a site-level configuration, such as site:Redmond).

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
A reference to a bandwidth policy service configuration object.
This object must be of type BandwidthPolicyServiceConfiguration, which can be retrieved by calling the Get-CsBandwidthPolicyServiceConfiguration cmdlet.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -EnableLogging
Set this parameter to True to generate CAC failure and link status logs related to the bandwidth policy service.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LogCleanUpInterval
The period of time after which CAC failure and link status logs will be removed.

This value must be within the range 1 day through 60 days.
The value must be entered in the format dd.hh:mm:ss, where d is days, h is hours, m is minutes, and s is seconds.
For example, 20 days would be 20.00:00:00.

```yaml
Type: TimeSpan
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxLogFileSizeMb
The maximum size the log file is allowed to reach.
The value for this parameter must be a positive number and specifies the file size in megabytes.
For example, to allow the log file to reach a maximum size of 10 megabytes, enter the value 10.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxTokenLifetime
The maximum amount of time the token issued by the Bandwidth Policy Authentication service will exist.

This value must be in the range 1 hour through 24 hours.
The value must be entered in the format dd.hh:mm:ss, where d is days, h is hours, m is minutes, and s is seconds.
For example, the value for 12 hours would be 12:00:00.

```yaml
Type: TimeSpan
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses any confirmation prompts that would otherwise be displayed before making changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Microsoft.Rtc.Management.WritableConfig.Settings.BandwidthPolicyServiceConfiguration.BandwidthPolicyServiceConfiguration object.
Accepts pipelined input of bandwidth policy service configuration objects.

## OUTPUTS

###  
This cmdlet does not return a value.
It modifies an object of type Microsoft.Rtc.Management.WritableConfig.Settings.BandwidthPolicyServiceConfiguration.BandwidthPolicyServiceConfiguration.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/b39af1ca-465d-4598-96a3-e19283ddf731(OCS.14).aspx)

[New-CsBandwidthPolicyServiceConfiguration]()

[Remove-CsBandwidthPolicyServiceConfiguration]()

[Get-CsBandwidthPolicyServiceConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/b39af1ca-465d-4598-96a3-e19283ddf731(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/b39af1ca-465d-4598-96a3-e19283ddf731(OCS.16).aspx)

