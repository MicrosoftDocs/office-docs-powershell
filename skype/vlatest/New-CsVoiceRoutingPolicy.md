---
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsVoiceRoutingPolicy

## SYNOPSIS
Below Content Applies To: Lync Server 2013

Creates a new voice routing policy.
Voice routing policies manage PSTN usages for users of hybrid voice.
Hybrid voice enables users homed on Office 365 to take advantage of the Enterprise Voice capabilities available in an on-premises installation of Microsoft Lync Server 2013 Preview.
This cmdlet was introduced in Lync Server 2013 Preview.

Below Content Applies To: Skype for Business Server 2015

Creates a new voice routing policy.
Voice routing policies manage PSTN usages for users of hybrid voice.
Hybrid voice enables users homed on Skype for Business Online to take advantage of the Enterprise Voice capabilities available in an on-premises installation of Skype for Business Server 2015.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

```
New-CsVoiceRoutingPolicy [-Identity] <XdsIdentity> [-Confirm] [-Description <String>] [-Force] [-InMemory]
 [-Name <String>] [-PstnUsages <PSListModifier>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2013

Voice routing policies are used in "hybrid" scenarios: when some of your users are homed on the on-premises version of Microsoft Lync Server 2013 Preview and other users are homed on the Office 365 version of Lync Server.
Assigning your Office 365 users a voice routing policy enables those users to receive and to place phones calls to the public switched telephone network by using your on-premises SIP trunks.

Note that simply assigning a user a voice routing policy will not enable them to make PSTN calls via Office 365.
Among other things, you will also need to enable those users for Enterprise Voice and will need to assign them an appropriate voice policy and dial plan.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "New-CsVoiceRoutingPolicy"}

Lync Server Control Panel: The functions carried out by the New-CsVoiceRoutingPolicy cmdlet are not available in the Lync Server Control Panel.

Below Content Applies To: Skype for Business Server 2015

Voice routing policies are used in "hybrid" scenarios: when some of your users are homed on the on-premises version of Skype for Business Server 2015 and other users are homed on Skype for Business Online.
Assigning your Skype for Business Online users a voice routing policy enables those users to receive and to place phones calls to the public switched telephone network by using your on-premises SIP trunks.

Note that simply assigning a user a voice routing policy will not enable them to make PSTN calls via Skype for Business Online.
Among other things, you will also need to enable those users for Enterprise Voice and will need to assign them an appropriate voice policy and dial plan.

Skype for Business Server Control Panel: The functions carried out by the New-CsVoiceRoutingPolicy cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 creates a new per-user voice routing policy with the Identity RedmondVoiceRoutingPolicy.
This policy is assigned a single PSTN usage: Long Distance.

New-CsVoiceRoutingPolicy -Identity "RedmondVoiceRoutingPolicy" -Name "RedmondVoiceRoutingPolicy" -PstnUsages "Long Distance"

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 creates a new per-user voice routing policy with the Identity RedmondVoiceRoutingPolicy.
This policy is assigned a single PSTN usage: Long Distance.

New-CsVoiceRoutingPolicy -Identity "RedmondVoiceRoutingPolicy" -Name "RedmondVoiceRoutingPolicy" -PstnUsages "Long Distance"

### -------------------------- Example 2 -------------------------- (Lync Server 2013)
```

```

Example 2 is a variation of the command shown in Example 1; in this case, however, the new policy is assigned three PSTN usages: Long Distance; Local; Internal.
Multiple usages can be assigned simply by separating each usage using a comma.

New-CsVoiceRoutingPolicy -Identity "RedmondVoiceRoutingPolicy" -Name "RedmondVoiceRoutingPolicy" -PstnUsages "Long Distance", "Local", "Internal"

### -------------------------- Example 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 is a variation of the command shown in Example 1; in this case, however, the new policy is assigned three PSTN usages: Long Distance; Local; Internal.
Multiple usages can be assigned simply by separating each usage using a comma.

New-CsVoiceRoutingPolicy -Identity "RedmondVoiceRoutingPolicy" -Name "RedmondVoiceRoutingPolicy" -PstnUsages "Long Distance", "Local", "Internal"

## PARAMETERS

### -Identity
Unique identifier to be assigned to the new voice routing policy.
Because you can only create new policies at the per-user scope, the Identity will always be the "name" being assigned to the policy.
For example:

-Identity "RedmondVoiceRoutingPolicy"

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
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

### -InMemory
Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set- cmdlet.

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
(PSTN usages can be retrieved by calling the Get-CsPstnUsage cmdlet.)

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
None.
New-CsVoiceRoutingPolicy does not accept pipelined input.

###  
None.
The New-CsVoiceRoutingPolicy cmdlet does not accept pipelined input.

## OUTPUTS

###  
New-CsVoiceRoutingPolicy creates new instances of Microsoft.Rtc.Management.WritableConfig.Policy.Voice.VoiceRoutingPolicy object.

###  
The New-CsVoiceRoutingPolicy cmdlet creates new instances of Microsoft.Rtc.Management.WritableConfig.Policy.Voice.VoiceRoutingPolicy object.

## NOTES

## RELATED LINKS

[Get-CsVoiceRoutingPolicy]()

[Grant-CsVoiceRoutingPolicy]()

[Remove-CsVoiceRoutingPolicy]()

[Set-CsVoiceRoutingPolicy]()

[Online Version](http://technet.microsoft.com/EN-US/library/9e5bd6f6-902f-4911-ab88-9abb581df7fd(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/9e5bd6f6-902f-4911-ab88-9abb581df7fd(OCS.16).aspx)

