---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: New-CsAVEdgeConfiguration
schema: 2.0.0
---

# New-CsAVEdgeConfiguration

## SYNOPSIS

Creates a new collection of configuration settings for computers running the A/V Edge service (these computers are also known as A/V Edge servers).
An A/V Edge server enables internal users to share audio and video data with external users (that is, users who are not logged on to your internal network).
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
New-CsAVEdgeConfiguration [-Identity] <XdsIdentity> [-MaxTokenLifetime <TimeSpan>] [-Force] [-InMemory]
 [-WhatIf] [-Confirm] [-MaxBandwidthPerPortKb <UInt32>] [-MaxBandwidthPerUserKb <UInt32>] [<CommonParameters>]
```

## DESCRIPTION

An A/V Edge server provides a way for audio and video traffic to be exchanged across an organization's firewall.
Among other things, this enables users to use Skype for Business Server across the Internet, and then exchange audio and video data with users who have logged onto the system from inside the firewall.
Edge Server configuration settings can be assigned at the global scope, the site scope, and the service scope.
The A/V Edge configuration settings enable administrators to manage the amount of time that user authentication is valid before it must be renewed, and to limit the amount of bandwidth that can be used by a single user or a single port.

The New-CsAVEdgeConfiguration cmdlet enables you to create new collections of A/V Edge configuration settings at either the site or the service scope.
As noted, A/V Edge settings can also be configured at the global scope.
However, you cannot create a new collection at the global scope.

Note that any given site or service can host, at most, a single collection of A/V Edge configuration settings.
If the Redmond site already hosts a collection of A/V Edge settings, you cannot create a new collection with the Identity site:Redmond.

Unless instructed by Microsoft support personnel, it is recommended that you do not change the default A/V Edge configuration settings.
Because of that, you will probably not need to create a new collection of settings for a site or service.



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- 
```

New-CsAVEdgeConfiguration -Identity site:Redmond -MaxTokenLifetime "04:00:00"
```

The command shown in Example 1 creates a new collection of A/V Edge configuration settings for the Redmond site.
In this example, the MaxTokenLifetime property is set to 4 hours (04 hours : 00 minutes : 00 seconds).


### -------------------------- EXAMPLE 2 -------------------------- 
```

$x = New-CsAVEdgeConfiguration -Identity site:Redmond -InMemory

$x.MaxTokenLifetime = "04:00:00"

Set-CsAVEdgeConfiguration -Instance $x
```

Example 2 demonstrates how you can create a new collection of A/V Edge configuration settings in memory, and then later transform those virtual settings into an actual collection of A/V Edge settings.
To do this, the first command in the example creates a new collection of settings for the Redmond site; the InMemory parameter is added to ensure that these settings are created in memory only and are not immediately applied to the Redmond site.
(Because these settings exist in memory only, they must be stored in a variable, in this case, a variable named $x.)

In the second command, the value of the MaxTokenLifetime property is set to 4 hours (04 hours : 00 minutes : 00 seconds).
The third command then uses the Set-CsAVEdgeConfiguration cmdlet to apply the settings stored in $x to the Redmond site.


## PARAMETERS

### -Identity
Unique identifier for the collection of A/V Edge configuration settings to be created.
To create a collection of settings to be applied at the site scope, use syntax similar to this: `-Identity site:Redmond.`
(Note that this command will fail if a collection of A/V Edge configuration settings have already been applied to the Redmond site.) Settings configured at the service scope should use syntax similar to this: `-Identity service:EdgeServer:atl-cs-001.litwareinc.com.`

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxTokenLifetime
The maximum amount of time that an authentication token can be used before it expires and must be renewed.
Token lifetimes are expressed using the following format: Days.Hours:Minutes:Seconds.
For example, 13 days must be expressed like this, with a period (.) following the number of days, and colons (:) used to separate the hours, minutes, and seconds:

13.00:00:00

The default value of 8 hours must be expressed like this:

08:00:00

The minimum allowed token lifetime is 1 minute (00:01:00); the maximum allowed lifetime is 180 days (180.00:00:00).

```yaml
Type: TimeSpan
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxBandwidthPerPortKb
Indicates the maximum amount of bandwidth (in kilobits per second) that can be allocated to a single port.
The maximum bandwidth can be set to any integer value between 1 and 4294967296 (4096 gigabits) per second; the default value is 3000.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxBandwidthPerUserKb
Indicates the maximum amount of bandwidth (in kilobits per second) that can be allocated to any one user.
The maximum bandwidth can be set to any integer value between 1 and 4294967296 (4096 gigabits) per second; the default value is 10000.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
None.
The New-CsAVEdgeConfiguration cmdlet does not accept pipelined input.

## OUTPUTS

###  
Creates instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Edge.MediaRelaySettings object.

## NOTES

## RELATED LINKS

[Get-CsAVEdgeConfiguration](Get-CsAVEdgeConfiguration.md)

[Remove-CsAVEdgeConfiguration](Remove-CsAVEdgeConfiguration.md)

[Set-CsAVEdgeConfiguration](Set-CsAVEdgeConfiguration.md)

