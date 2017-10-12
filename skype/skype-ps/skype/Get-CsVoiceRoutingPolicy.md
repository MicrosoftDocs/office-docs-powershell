---
external help file: 
applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015
title: Get-CsVoiceRoutingPolicy
schema: 2.0.0
---

# Get-CsVoiceRoutingPolicy

## SYNOPSIS
Returns information about the voice routing policies configured for use in your organization.
Voice routing policies manage PSTN usages for users of hybrid voice.
Hybrid voice enables users homed on Skype for Business Online to take advantage of the Enterprise Voice capabilities available in an on-premises installation of Skype for Business Server.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

### Filter
```
Get-CsVoiceRoutingPolicy [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

### Identity
```
Get-CsVoiceRoutingPolicy [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

###  (Default)
```
Get-CsVoiceRoutingPolicy [[-Identity] <Object>] [-BypassDualWrite <Object>] [-Filter <Object>] [-LocalStore]
 [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
Voice routing policies are used in "hybrid" scenarios: when some of your users are homed on the on-premises version of Skype for Business Server and other users are homed on Skype for Business Online.
Assigning your Skype for Business Online users a voice routing policy enables those users to receive and to place phones calls to the public switched telephone network by using your on-premises SIP trunks.

Note that simply assigning a user a voice routing policy will not enable them to make PSTN calls via Skype for Business Online.
Among other things, you will also need to enable those users for Enterprise Voice and will need to assign them an appropriate voice policy and dial plan.

The functions carried out by the Get-CsVoiceRoutingPolicy cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsVoiceRoutingPolicy
```

The command shown in Example 1 returns information for all the voice routing policies configured for use in the organization.


### -------------------------- Example 2 -------------------------- 
```
Get-CsVoiceRoutingPolicy -Identity "RedmondVoiceRoutingPolicy"
```

In Example 2, information is returned for a single voice routing policy: the policy with the Identity RedmondVoiceRoutingPolicy.



### -------------------------- Example 3 -------------------------- 
```
Get-CsVoiceRoutingPolicy -Filter "tag:*"
```

The command shown in Example 3 returns information about all the voice routing policies configured at the per-user scope.
To do this, the command uses the Filter parameter and the filter value "tag:*"; that filter value limits the returned data to policies that have an Identity that begins with the string value "tag:".



### -------------------------- Example 4 -------------------------- 
```
Get-CsVoiceRoutingPolicy | Where-Object {$_.PstnUsages -contains "Long Distance"}
```

In Example 4, information is returned only for those voice routing policies that include the PSTN usage "Long Distance".
To carry out this task, the command first calls Get-CsVoiceRoutingPolicy without any parameters; that returns a collection of all the voice routing policies configured for use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those policies where the PstnUsages property includes (-contains) the usage "Long Distance".


### -------------------------- Example 5 -------------------------- 
```
Get-CsVoiceRoutingPolicy | Where-Object {$_.PstnUsages -notcontains "Long Distance"}
```

Example 5 is a variation on the command shown in Example 4; in this case, however, information is returned only for those voice routing policies that do not include the PSTN usage "Long Distance".
In order to do that, the Where-Object cmdlet uses the -notcontains operator, which limits returned data to policies that do not include the usage "Long Distance".


## PARAMETERS

### -Filter


Enables you to use wildcards when retrieving one or more voice routing policies.
For example, to return all the policies configured at the per-user scope, use this syntax:

-Filter "tag:*"



```yaml
Type: String
Parameter Sets: Filter, (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

Unique identifier of the voice routing policy to be retrieved.
To return the global policy, use this syntax:

-Identity global

To return a policy configured at the per-user scope, use syntax like this:

-Identity "RedmondVoiceRoutingPolicy"

You cannot use wildcard characters when specifying the Identity.

If neither the Identity nor the Filter parameters are specified, then Get-CsVoiceRoutingPolicy returns all the voice routing policies configured for use in the organization.



```yaml
Type: XdsIdentity
Parameter Sets: Identity, (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the voice policy data from the local replica of the Central Management store rather than from the Central Management store itself.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

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
The Get-CsVoiceRoutingPolicy cmdlet does not accept pipelined input.

## OUTPUTS

###  
The Get-CsVoiceRoutingPolicy cmdlet returns instances of the Microsoft.Rtc.Management.WritableConfig.Policy.Voice.VoiceRoutingPolicy object.

## NOTES

## RELATED LINKS

[Grant-CsVoiceRoutingPolicy](Grant-CsVoiceRoutingPolicy.md)

[New-CsVoiceRoutingPolicy](New-CsVoiceRoutingPolicy.md)

[Remove-CsVoiceRoutingPolicy](Remove-CsVoiceRoutingPolicy.md)

[Set-CsVoiceRoutingPolicy](Set-CsVoiceRoutingPolicy.md)
