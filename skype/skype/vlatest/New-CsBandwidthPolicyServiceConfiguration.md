---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsBandwidthPolicyServiceConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Creates a new bandwidth policy service configuration.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Creates a new bandwidth policy service configuration.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
New-CsBandwidthPolicyServiceConfiguration [-Identity] <XdsIdentity> [-EnableLogging <Boolean>]
 [-LogCleanUpInterval <TimeSpan>] [-MaxLogFileSizeMb <UInt32>] [-MaxTokenLifetime <TimeSpan>] [-Force]
 [-InMemory] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Call admission control (CAC) is a way of determining whether to allow real-time communications sessions, such as voice or video calls, to be established based on bandwidth constraints.
Within the Microsoft Lync Server 2010 implementation of CAC, regions, sites, and subnets are defined within a network along with the relationships and links between those entities in order to place bandwidth constraints between them.
Bandwidth Policy service is the component that performs CAC functionality in the Lync Server 2010 deployment, enabling the decision as to whether sufficient bandwidth exists for a call to be established.
This cmdlet configures a new bandwidth policy service at the site level.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsBandwidthPolicyServiceConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "New-CsBandwidthPolicyServiceConfiguration"}

**Below Content Applies To:** Lync Server 2013

Call admission control (CAC) is a way of determining whether to allow real-time communications sessions, such as voice or video calls, to be established based on bandwidth constraints.
Within the Lync Server implementation of CAC, regions, sites, and subnets are defined within a network along with the relationships and links between those entities in order to place bandwidth constraints between them.
Bandwidth Policy service is the component that performs CAC functionality in the Lync Server deployment, enabling the decision as to whether sufficient bandwidth exists for a call to be established.
This cmdlet configures a new bandwidth policy service at the site level.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsBandwidthPolicyServiceConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "New-CsBandwidthPolicyServiceConfiguration"}

**Below Content Applies To:** Skype for Business Server 2015

Call admission control (CAC) is a way of determining whether to allow real-time communications sessions, such as voice or video calls, to be established based on bandwidth constraints.
Within the Skype for Business Server 2015 implementation of CAC, regions, sites, and subnets are defined within a network along with the relationships and links between those entities in order to place bandwidth constraints between them.
Bandwidth Policy service is the component that performs CAC functionality in the Skype for Business Server 2015 deployment, enabling the decision as to whether sufficient bandwidth exists for a call to be established.
This cmdlet configures a new bandwidth policy service at the site level.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
New-CsBandwidthPolicyServiceConfiguration -Identity site:Redmond
```

This example creates a new bandwidth policy service configuration at the site Redmond (-Identity site:Redmond).
No other parameters are specified, so the defaults are used for all configuration values.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

This example creates a new bandwidth policy service configuration at the site Redmond (-Identity site:Redmond).
No other parameters are specified, so the defaults are used for all configuration values.

New-CsBandwidthPolicyServiceConfiguration -Identity site:Redmond

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

This example creates a new bandwidth policy service configuration at the site Redmond (-Identity site:Redmond).
No other parameters are specified, so the defaults are used for all configuration values.

New-CsBandwidthPolicyServiceConfiguration -Identity site:Redmond

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
New-CsBandwidthPolicyServiceConfiguration -Identity site:Dublin -EnableLogging $True -LogCleanupInterval 30.00:00:00
```

In this example we again create a new bandwidth policy service configuration, this time for the Dublin site (-Identity site:Dublin).
For this site, rather than accepting the default values, we want to enable logging and set the number of days that pass before logs are cleaned up to 30 days.
We do this by passing a value of True ($True) to the EnableLogging parameter, and then passing a value of 30.00:00:00 to the parameter LogCleanupInterval.
The LogCleanupInterval value is a TimeSpan object, which is in the format dd.hh:mm:ss, where d is days, h is hours, m is minutes, and s is seconds.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

In this example we again create a new bandwidth policy service configuration, this time for the Dublin site (-Identity site:Dublin).
For this site, rather than accepting the default values, we want to enable logging and set the number of days that pass before logs are cleaned up to 30 days.
We do this by passing a value of True ($True) to the EnableLogging parameter, and then passing a value of 30.00:00:00 to the parameter LogCleanupInterval.
The LogCleanupInterval value is a TimeSpan object, which is in the format dd.hh:mm:ss, where d is days, h is hours, m is minutes, and s is seconds.

New-CsBandwidthPolicyServiceConfiguration -Identity site:Dublin -EnableLogging $True -LogCleanupInterval 30.00:00:00

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

In this example we again create a new bandwidth policy service configuration, this time for the Dublin site (-Identity site:Dublin).
For this site, rather than accepting the default values, we want to enable logging and set the number of days that pass before logs are cleaned up to 30 days.
We do this by passing a value of True ($True) to the EnableLogging parameter, and then passing a value of 30.00:00:00 to the parameter LogCleanupInterval.
The LogCleanupInterval value is a TimeSpan object, which is in the format dd.hh:mm:ss, where d is days, h is hours, m is minutes, and s is seconds.

New-CsBandwidthPolicyServiceConfiguration -Identity site:Dublin -EnableLogging $True -LogCleanupInterval 30.00:00:00

## PARAMETERS

### -Identity
A unique identifier that contains the scope and name of the configuration.
This configuration can be created only at the site scope, so the Identity will be in the following format: site:\<site name\>, where \<site name\> is the name of the site to which the configuration applies.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableLogging
Set this parameter to True to generate CAC failure and link status logs related to the bandwidth policy service.

Default: False

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

Default: 10 days (10.00:00:00)

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
The value for this parameter must be a positive number; it specifies the file size in megabytes.

Default: 3 (MB)

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

Default: 8 hours (08:00:00)

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

### -InMemory
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set- cmdlet.



**Below Content Applies To:** Skype for Business Server 2015

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set-\<cmdlet\>.



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
None.

## OUTPUTS

###  
Creates an object of type Microsoft.Rtc.Management.WritableConfig.Settings.BandwidthPolicyServiceConfiguration.BandwidthPolicyServiceConfiguration.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/0cb07eda-ffbe-48e2-b6bc-995737e5ba32(OCS.14).aspx)

[Remove-CsBandwidthPolicyServiceConfiguration]()

[Set-CsBandwidthPolicyServiceConfiguration]()

[Get-CsBandwidthPolicyServiceConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/0cb07eda-ffbe-48e2-b6bc-995737e5ba32(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/0cb07eda-ffbe-48e2-b6bc-995737e5ba32(OCS.16).aspx)

