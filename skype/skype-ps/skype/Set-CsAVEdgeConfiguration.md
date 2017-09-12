---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsAVEdgeConfiguration

## SYNOPSIS
Enables you to modify configuration settings for computers running the A/V Edge service (these computers are also known as A/V Edge servers).
An A/V Edge server enables internal users to share audio and video data with external users (that is, users who are not logged on to your internal network), as well as exchange files and participate in desktop sharing sessions.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Set-CsAVEdgeConfiguration [[-Identity] <XdsIdentity>] [-MaxTokenLifetime <TimeSpan>] [-Force] [-WhatIf]
 [-Confirm] [-MaxBandwidthPerPortKb <UInt32>] [-MaxBandwidthPerUserKb <UInt32>] [<CommonParameters>]
```

### Instance
```
Set-CsAVEdgeConfiguration [-Instance <PSObject>] [-MaxTokenLifetime <TimeSpan>] [-Force] [-WhatIf] [-Confirm]
 [-MaxBandwidthPerPortKb <UInt32>] [-MaxBandwidthPerUserKb <UInt32>] [<CommonParameters>]
```

## DESCRIPTION
An A/V Edge server provides a way for audio and video traffic to be exchanged across an organization's firewall.
Among other things, this enables users to use Skype for Business Server across the Internet and then exchange audio and video data with users who have logged onto the system from inside the firewall.
Edge Server configuration settings can be assigned at the global scope, the site scope and the service scope.
These configuration settings enable administrators to do such things as manage the amount of time that user authentication is valid before it must be renewed and to limit the amount of bandwidth that can be used by a single user or a single port.

The `Set-CsAVEdgeConfiguration` cmdlet provides a way for you to modify the A/V Edge configuration settings currently in use in your organization.
However, unless instructed by Microsoft support personnel, it is recommended that administrators do not modify the default A/V Edge settings.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
Set-CsAVEdgeConfiguration -Identity global -MaxTokenLifetime "04:00:00"
```

In Example 1, the command modifies the MaxTokenLifetime property for the global A/V Edge configuration settings.
In this example, the maximum token lifetime is set to 4 hours (04 hours : 00 minutes : 00 seconds).


## PARAMETERS

### -Identity
Unique identifier for the collection of A/V Edge configuration settings to be modified.
To modify the global collection, use the following syntax: `-Identity global`.
To modify a site collection use syntax similar to this: `-Identity site:Redmond`.
Settings configured at the service scope should be referred to using syntax similar to this: `-Identity service:EdgeServer:atl-cs-001.litwareinc.com`.

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
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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

### -MaxBandwidthPerPortKb
Indicates the maximum amount of bandwidth (in kilobits per second) that can be allocated to a single port.
The maximum bandwidth can be set to any integer value between 1 and 4294967296 (4096 gigabits) per second; the default value is 3000.

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

### -MaxBandwidthPerUserKb
Indicates the maximum amount of bandwidth (in kilobits per second) that can be allocated to any one user.
The maximum bandwidth can be set to any integer value between 1 and 4294967296 (4096 gigabits) per second; the default value is 10000.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
Microsoft.Rtc.Management.WritableConfig.Settings.Edge.MediaRelaySettings object.
The `Set-CsAVEdgeConfiguration` cmdlet accepts pipelined input of media relay settings objects.

## OUTPUTS

###  
The `Set-CsAVEdgeConfiguration` cmdlet does not return a value or object.
Instead, the cmdlet configures instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Edge.MediaRelaySettings object.

## NOTES

## RELATED LINKS

[Get-CsAVEdgeConfiguration]()

[New-CsAVEdgeConfiguration]()

[Remove-CsAVEdgeConfiguration]()
