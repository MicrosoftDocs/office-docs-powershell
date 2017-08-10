---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsVoiceRoutingPolicy

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Deletes an existing voice routing policy.
Voice routing policies manage PSTN usages for users of hybrid voice.
Hybrid voice enables users homed on Office 365 to take advantage of the Enterprise Voice capabilities available in an on-premises installation of Microsoft Lync Server 2013 Preview Management Shell.
This cmdlet was introduced in Lync Server 2013 Preview.

**Below Content Applies To:** Skype for Business Server 2015

Deletes an existing voice routing policy.
Voice routing policies manage PSTN usages for users of hybrid voice.
Hybrid voice enables users homed on Skype for Business Online to take advantage of the Enterprise Voice capabilities available in an on-premises installation of Skype for Business Server 2015.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

```
Remove-CsVoiceRoutingPolicy [-Identity] <XdsIdentity> [-Confirm] [-Force] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2013

Voice routing policies are used in "hybrid" scenarios: when some of your users are homed on the on-premises version of Microsoft Lync Server 2013 Preview and other users are homed on the Office 365 version of Lync Server.
Assigning your Office 365 users a voice routing policy enables those users to receive and to place phones calls to the public switched telephone network by using your on-premises SIP trunks.

Note that simply assigning a user a voice routing policy will not enable them to make PSTN calls via Office 365.
Among other things, you will also need to enable those users for Enterprise Voice and will need to assign them an appropriate voice policy and dial plan.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsVoiceRoutingPolicy"}

Lync Server Control Panel: The functions carried out by the Remove-CsVoiceRoutingPolicy cmdlet are not available in the Lync Server Control Panel.

**Below Content Applies To:** Skype for Business Server 2015

Voice routing policies are used in "hybrid" scenarios: when some of your users are homed on the on-premises version of Skype for Business Server 2015 and other users are homed on Skype for Business Online.
Assigning your Skype for Business Online users a voice routing policy enables those users to receive and to place phones calls to the public switched telephone network by using your on-premises SIP trunks.

Note that simply assigning a user a voice routing policy will not enable them to make PSTN calls via Skype for Business Online.
Among other things, you will also need to enable those users for Enterprise Voice and will need to assign them an appropriate voice policy and dial plan.

Skype for Business Server Control Panel: The functions carried out by the Remove-CsVoiceRoutingPolicy cmdlet are not available in the Skype for Business Server 2015.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 deletes the voice routing policy RedmondVoiceRoutingPolicy

Remove-CsVoiceRoutingPolicy -Identity "RedmondVoiceRoutingPolicy"

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 deletes the voice routing policy RedmondVoiceRoutingPolicy

Remove-CsVoiceRoutingPolicy -Identity "RedmondVoiceRoutingPolicy"

### -------------------------- Example 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, all the voice routing policies configured at the per-user scope are removed.
To do this, the command first calls Get-CsVoiceRoutingPolicy along with the Filter parameter; the filter value "tag:*" limits the returned data to voice routing policies configured at the per-user scope.
Those per-user policies are then piped to, and removed by, the Remove-CsVoiceRoutingPolicy cmdlet.

Get-CsVoiceRoutingPolicy -Filter "tag:*" | Remove-CsVoiceRoutingPolicy

### -------------------------- Example 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, all the voice routing policies configured at the per-user scope are removed.
To do this, the command first calls the Get-CsVoiceRoutingPolicy cmdlet along with the Filter parameter; the filter value "tag:*" limits the returned data to voice routing policies configured at the per-user scope.
Those per-user policies are then piped to, and removed by, the Remove-CsVoiceRoutingPolicy cmdlet.

Get-CsVoiceRoutingPolicy -Filter "tag:*" | Remove-CsVoiceRoutingPolicy

### -------------------------- Example 3 -------------------------- (Lync Server 2013)
```

```

In Example 3, all the voice routing polices that include the PSTN usage "Long Distance" are removed.
To carry out this task, Get-CsVoiceRoutingPolicy is first called without any parameters in order to return a collection of all the available voice routing policies.
That collection is then piped to the Where-Object cmdlet, which picks out only those policies where the PstnUsages property includes (-contains) the usage "Long Distance." Policies that meet that criterion are then piped to the Remove-CsVoiceRoutingPolicy, which removes each voice routing policy that includes the PSTN usage "Long Distance".

Get-CsVoiceRoutingPolicy | Where-Object {$_.PstnUsages -contains "Long Distance"} | Remove-CsVoiceRoutingPolicy

### -------------------------- Example 3 -------------------------- (Skype for Business Server 2015)
```

```

In Example 3, all the voice routing polices that include the PSTN usage "Long Distance" are removed.
To carry out this task, the Get-CsVoiceRoutingPolicy cmdlet is first called without any parameters in order to return a collection of all the available voice routing policies.
That collection is then piped to the Where-Object cmdlet, which picks out only those policies where the PstnUsages property includes (-contains) the usage "Long Distance." Policies that meet that criterion are then piped to the Remove-CsVoiceRoutingPolicy, which removes each voice routing policy that includes the PSTN usage "Long Distance".

Get-CsVoiceRoutingPolicy | Where-Object {$_.PstnUsages -contains "Long Distance"} | Remove-CsVoiceRoutingPolicy

## PARAMETERS

### -Identity
Unique identifier for the voice routing policy to be removed.
To "remove" the global policy, use the following syntax:

-Identity global

Note that the global policy cannot actually be removed.
Instead, all the properties in that policy will be reset to their default values.

To remove a per-user policy, use syntax similar to this:

-Identity "RedmondVoiceRoutingPolicy"

You cannot use wildcards when specifying a policy Identity.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
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

### -Force
**Below Content Applies To:** Lync Server 2013

If this parameter is present, the policy will automatically be removed even if it is currently assigned to at least one user.

If this parameter is not present, then Remove-CsVoiceRoutingPolicy will not automatically remove a per-user policy that is assigned to at least one user.
Instead, a confirmation prompt will appear asking if you are sure that you want to remove the policy.
You must answer yes (by pressing the Y key) before the command will continue and the policy will be removed.



**Below Content Applies To:** Skype for Business Server 2015

If this parameter is present, the policy will automatically be removed even if it is currently assigned to at least one user.

If this parameter is not present, then the Remove-CsVoiceRoutingPolicy cmdlet will not automatically remove a per-user policy that is assigned to at least one user.
Instead, a confirmation prompt will appear asking if you are sure that you want to remove the policy.
You must answer yes (by pressing the Y key) before the command will continue and the policy will be removed.



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
Remove-CsVoiceRoutingPolicy accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Policy.Voice.VoiceRoutingPolicy object.

###  
The Remove-CsVoiceRoutingPolicy cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Policy.Voice.VoiceRoutingPolicy object.

## OUTPUTS

###  
None.
Instead, Remove-CsVoiceRoutingPolicy deletes existing instances of the Microsoft.Rtc.Management.WritableConfig.Policy.Voice.VoiceRoutingPolicy object.

###  
None.
Instead, the Remove-CsVoiceRoutingPolicy cmdlet deletes existing instances of the Microsoft.Rtc.Management.WritableConfig.Policy.Voice.VoiceRoutingPolicy object.

## NOTES

## RELATED LINKS

[Get-CsVoiceRoutingPolicy]()

[Grant-CsVoiceRoutingPolicy]()

[New-CsVoiceRoutingPolicy]()

[Set-CsVoiceRoutingPolicy]()

[Online Version](http://technet.microsoft.com/EN-US/library/3729e908-5c0d-4970-bdff-5869ba2082c9(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/3729e908-5c0d-4970-bdff-5869ba2082c9(OCS.16).aspx)

