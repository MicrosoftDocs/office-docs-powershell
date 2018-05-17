---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsRoutingConfiguration
schema: 2.0.0
---

# Get-CsRoutingConfiguration

## SYNOPSIS
Retrieves the routing configuration object, which contains a list of all voice routes defined within a Skype for Business Server deployment.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Get-CsRoutingConfiguration [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsRoutingConfiguration [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
Voice routes contain instructions that tell Skype for Business Server how to route calls from Enterprise Voice users to phone numbers on the public switched telephone network (PSTN) or a private branch exchange (PBX).
This cmdlet is used to retrieve the global instance that holds a list of all voice routes defined within the Skype for Business Server deployment.
To retrieve individual voice routes or to retrieve them as individual objects rather than as a list, use the Get-CsVoiceRoute cmdlet.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsRoutingConfiguration
```

This example retrieves the routing configuration.
To retrieve individual voice routes, use the Get-CsVoiceRoute cmdlet.


## PARAMETERS

### -Identity
The scope of the routing configuration to retrieve.
The only possible value is Global.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
There can be only one instance of this object, so this parameter does nothing.

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the routing configuration from the local replica of the Central Management store, rather than the Central Management store itself.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.Writable.Policy.Voice.PSTNRoutingSettings


## NOTES


## RELATED LINKS

[New-CsRoutingConfiguration](New-CsRoutingConfiguration.md)

[Remove-CsRoutingConfiguration](Remove-CsRoutingConfiguration.md)

[Set-CsRoutingConfiguration](Set-CsRoutingConfiguration.md)

[Get-CsVoiceRoute](Get-CsVoiceRoute.md)

