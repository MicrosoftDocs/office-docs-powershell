---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsVoiceRoutingPolicy

## SYNOPSIS
Modifies an existing voice routing policy.
Voice routing policies manage PSTN usages for users of hybrid voice.
Hybrid voice enables users homed on Skype for Business Online to take advantage of the Enterprise Voice capabilities available in an on-premises installation of Skype for Business Server.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

### Identity
```
Set-CsVoiceRoutingPolicy [[-Identity] <XdsIdentity>] [-Confirm] [-Description <String>] [-Force]
 [-Name <String>] [-PstnUsages <PSListModifier>] [-WhatIf] [<CommonParameters>]
```

### Instance
```
Set-CsVoiceRoutingPolicy [-Confirm] [-Description <String>] [-Force] [-Instance <PSObject>] [-Name <String>]
 [-PstnUsages <PSListModifier>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Voice routing policies are used in "hybrid" scenarios: when some of your users are homed on the on-premises version of Skype for Business Server and other users are homed on Skype for Business Online.
Assigning your Skype for Business Server users a voice routing policy enables those users to receive and to place phones calls to the public switched telephone network by using your on-premises SIP trunks.

Note that simply assigning a user a voice routing policy will not enable them to make PSTN calls via Skype for Business Online.
Among other things, you will also need to enable those users for Enterprise Voice and will need to assign them an appropriate voice policy and dial plan.

Skype for Business Server Control Panel: The functions carried out by the `Set-CsVoiceRoutingPolicy` cmdlet are not available in the Skype for Business Server Control Panel.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsVoiceRoutingPolicy -Identity "RedmondVoiceRoutingPolicy" -PstnUsages @{Add="Long Distance"}
```

The command shown in Example 1 adds the PSTN usage "Long Distance" to the per-user voice routing policy RedmondVoiceRoutingPolicy.


### -------------------------- Example 2 --------------------------
```
Set-CsVoiceRoutingPolicy -Identity "RedmondVoiceRoutingPolicy" -PstnUsages @{Remove="Local"}
```

In Example 2, the PSTN usage "Local" is removed from the per-user voice routing policy RedmondVoiceRoutingPolicy.


### -------------------------- Example 3 --------------------------
```
Get-CsVoiceRoutingPolicy | Where-Object {$_.PstnUsages -contains "Local"} | Set-CsVoiceRoutingPolicy -PstnUsages @{Remove="Local"}
```

Example 3 removes the PSTN usage "Local" is removed from all the voice routing policies that include that usage.
In order to do this, the command first calls the `Get-CsVoiceRoutingPolicy` cmdlet without any parameters in order to return a collection of all the available voice routing policies.
That collection is then piped to the `Where-Object` cmdlet, which picks out only those policies where the PstnUsages property includes (-contains) the "Local" usage.
Those policies are then piped to the `Set-CsVoiceRoutingPolicy` cmdlet, which deletes the Local usage from each policy.


## PARAMETERS

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
Enables administrators to provide explanatory text to accompany a voice routing policy.
For example, the Description might include information about the users the policy should be assigned to.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Unique identifier assigned to the policy when it was created.
Voice routing policies can be assigned at the global scope or the per-user scope.
To refer to the global instance, use this syntax:

`-Identity global`

To refer to a per-user policy, use syntax similar to this:

`-Identity "RedmondVoiceRoutingPolicy"`

If you do not specify an Identity, then the `Set-CsVoiceRoutingPolicy` cmdlet will modify the global policy.


```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Name
A friendly name describing this policy.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PstnUsages
A list of PSTN usages (such as Local or Long Distance) that can be applied to this voice routing policy.
The PSTN usage must be an existing usage.
(PSTN usages can be retrieved by calling the `Get-CsPstnUsage` cmdlet.)

```yaml
Type: PSListModifier
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2013, Skype for Business Server 2015

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
The `Set-CsVoiceRoutingPolicy` cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Policy.Voice.VoiceRoutingPolicy object.

## OUTPUTS

###  
None.
Instead, the `Set-CsVoiceRoutingPolicy` cmdlet modifies existing instances of the Microsoft.Rtc.Management.WritableConfig.Policy.Voice.VoiceRoutingPolicy object.

## NOTES

## RELATED LINKS

[Get-CsVoiceRoutingPolicy]()

[Grant-CsVoiceRoutingPolicy]()

[New-CsVoiceRoutingPolicy]()

[Remove-CsVoiceRoutingPolicy]()
