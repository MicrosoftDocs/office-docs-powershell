---
applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsVoiceRoutingPolicy

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Returns information about the voice routing policies configured for use in your organization.
Voice routing policies manage PSTN usages for users of hybrid voice.
Hybrid voice enables users homed on Office 365 to take advantage of the Enterprise Voice capabilities available in an on-premises installation of Microsoft Lync Server 2013 Preview.
This cmdlet was introduced in Lync Server 2013 Preview.

**Below Content Applies To:** Skype for Business Online

Use the Get-CsVoiceRoutingPolicy cmdlet to return information about the voice routing policies configured for use in your organization.
In Skype for Business Online, voice routing policies are used to determine if users can make international calls as well as taking advantage of the other Enterprise Voice capabilities available in an on-premises installation of Skype for Business Server 2015.

**Below Content Applies To:** Skype for Business Server 2015

Returns information about the voice routing policies configured for use in your organization.
Voice routing policies manage PSTN usages for users of hybrid voice.
Hybrid voice enables users homed on Skype for Business Online to take advantage of the Enterprise Voice capabilities available in an on-premises installation of Skype for Business Server 2015.
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
**Below Content Applies To:** Lync Server 2013

Voice routing policies are used in "hybrid" scenarios: when some of your users are homed on the on-premises version of Microsoft Lync Server 2013 Preview and other users are homed on the Office 365 version of Lync Server.
Assigning your Office 365 users a voice routing policy enables those users to receive and to place phones calls to the public switched telephone network by using your on-premises SIP trunks.

Note that simply assigning a user a voice routing policy will not enable them to make PSTN calls via Office 365.
Among other things, you will also need to enable those users for Enterprise Voice and will need to assign them an appropriate voice policy and dial plan.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsVoiceRoutingPolicy"}

Lync Server Control Panel: The functions carried out by the Get-CsVoiceRoutingPolicy cmdlet are not available in the Lync Server Control Panel.

**Below Content Applies To:** Skype for Business Online

Voice routing policies are used in "hybrid" scenarios: when some of your users are homed on the on-premises version of Skype for Business Server 2015 and other users are homed on Skype for Business Online.

Note that simply assigning a user a voice routing policy will not enable them to make PSTN calls via Skype for Business Online.
Among other things, you will need to enable those users for Enterprise Voice as well as assign them an appropriate voice policy and dial plan.

The functions carried out by the Get-CsVoiceRoutingPolicy cmdlet are not available in the Skype for Business Server Control Panel.

Skype for Business Online supports two predefined routing policies.
One allows international calls and the other doesn't.
They are named respectively InternationalCallsAllowed, and InternationalCallsDisallowed.
Granting one of these policies to a user will either allow or disallow international calling for that user.

**Below Content Applies To:** Skype for Business Server 2015

Voice routing policies are used in "hybrid" scenarios: when some of your users are homed on the on-premises version of Skype for Business Server 2015 and other users are homed on Skype for Business Online.
Assigning your Skype for Business Online users a voice routing policy enables those users to receive and to place phones calls to the public switched telephone network by using your on-premises SIP trunks.

Note that simply assigning a user a voice routing policy will not enable them to make PSTN calls via Skype for Business Online.
Among other things, you will also need to enable those users for Enterprise Voice and will need to assign them an appropriate voice policy and dial plan.

Skype for Business Server Control Panel: The functions carried out by the Get-CsVoiceRoutingPolicy cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 returns information for all the voice routing policies configured for use in the organization.

Get-CsVoiceRoutingPolicy

### -------------------------- Example 1 -------------------------- (Skype for Business Online)
```

```

The command shown in Example 1 returns information for all the voice routing policies configured for use in the organization.

Get-CsVoiceRoutingPolicy

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 returns information for all the voice routing policies configured for use in the organization.

Get-CsVoiceRoutingPolicy

### -------------------------- Example 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, information is returned for a single voice routing policy: the policy with the Identity RedmondVoiceRoutingPolicy.

Get-CsVoiceRoutingPolicy -Identity "RedmondVoiceRoutingPolicy"

### -------------------------- Example 2 -------------------------- (Skype for Business Online)
```

```

In Example 2, information is returned for a single voice routing policy: the policy with the Identity RedmondVoiceRoutingPolicy.

Get-CsVoiceRoutingPolicy -Identity "RedmondVoiceRoutingPolicy"

### -------------------------- Example 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, information is returned for a single voice routing policy: the policy with the Identity RedmondVoiceRoutingPolicy.

Get-CsVoiceRoutingPolicy -Identity "RedmondVoiceRoutingPolicy"

### -------------------------- Example 3 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 3 returns information about all the voice routing policies configured at the per-user scope.
To do this, the command uses the Filter parameter and the filter value "tag:*"; that filter value limits the returned data to policies that have an Identity that begins with the string value "tag:".

Get-CsVoiceRoutingPolicy -Filter "tag:*"

### -------------------------- Example 3 -------------------------- (Skype for Business Online)
```

```

The command shown in Example 3 returns information about all the voice routing policies configured at the per-user scope.
To do this, the command uses the Filter parameter and the filter value "tag:*"; that filter value limits the returned data to policies that have an Identity that begins with the string value "tag:".

Get-CsVoiceRoutingPolicy -Filter "tag:*"

### -------------------------- Example 3 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 3 returns information about all the voice routing policies configured at the per-user scope.
To do this, the command uses the Filter parameter and the filter value "tag:*"; that filter value limits the returned data to policies that have an Identity that begins with the string value "tag:".

Get-CsVoiceRoutingPolicy -Filter "tag:*"

### -------------------------- Example 4 -------------------------- (Lync Server 2013)
```

```

In Example 4, information is returned only for those voice routing policies that include the PSTN usage "Long Distance".
To carry out this task, the command first calls Get-CsVoiceRoutingPolicy without any parameters; that returns a collection of all the voice routing policies configured for use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those policies where the PstnUsages property includes (-contains) the usage "Long Distance".

Get-CsVoiceRoutingPolicy | Where-Object {$_.PstnUsages -contains "Long Distance"}

### -------------------------- Example 4 -------------------------- (Skype for Business Online)
```

```

In Example 4, information is returned only for those voice routing policies that include the PSTN usage "Long Distance".
To carry out this task, the command first calls the Get-CsVoiceRoutingPolicy cmdlet without any parameters; that returns a collection of all the voice routing policies configured for use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those policies where the PstnUsages property includes (-contains) the usage "Long Distance".

Get-CsVoiceRoutingPolicy | Where-Object {$_.PstnUsages -contains "Long Distance"}

### -------------------------- Example 4 -------------------------- (Skype for Business Server 2015)
```

```

In Example 4, information is returned only for those voice routing policies that include the PSTN usage "Long Distance".
To carry out this task, the command first calls the Get-CsVoiceRoutingPolicy cmdlet without any parameters; that returns a collection of all the voice routing policies configured for use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those policies where the PstnUsages property includes (-contains) the usage "Long Distance".

Get-CsVoiceRoutingPolicy | Where-Object {$_.PstnUsages -contains "Long Distance"}

### -------------------------- Example 5 -------------------------- (Lync Server 2013)
```

```

Example 5 is a variation on the command shown in Example 4; in this case, however, information is returned only for those voice routing policies that do not include the PSTN usage "Long Distance".
In order to do that, the Where-Object cmdlet uses the -notcontains operator, which limits returned data to policies that do not include the usage "Long Distance".

Get-CsVoiceRoutingPolicy | Where-Object {$_.PstnUsages -notcontains "Long Distance"}

### -------------------------- Example 5 -------------------------- (Skype for Business Online)
```

```

Example 5 is a variation on the command shown in Example 4; in this case, however, information is returned only for those voice routing policies that do not include the PSTN usage "Long Distance".
In order to do that, the Where-Object cmdlet uses the -notcontains operator, which limits returned data to policies that do not include the usage "Long Distance".

Get-CsVoiceRoutingPolicy | Where-Object {$_.PstnUsages -notcontains "Long Distance"}

### -------------------------- Example 5 -------------------------- (Skype for Business Server 2015)
```

```

Example 5 is a variation on the command shown in Example 4; in this case, however, information is returned only for those voice routing policies that do not include the PSTN usage "Long Distance".
In order to do that, the Where-Object cmdlet uses the -notcontains operator, which limits returned data to policies that do not include the usage "Long Distance".

Get-CsVoiceRoutingPolicy | Where-Object {$_.PstnUsages -notcontains "Long Distance"}

## PARAMETERS

### -Filter
**Below Content Applies To:** Lync Server 2013, Skype for Business Online

Enables you to use wildcards when retrieving one or more voice routing policies.
For example, to return all the policies configured at the per-user scope, use this syntax:

-Filter "tag:*"



**Below Content Applies To:** Skype for Business Server 2015

{{Fill Filter Description}}



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
**Below Content Applies To:** Lync Server 2013

Unique identifier of the voice routing policy to be retrieved.
To return the global policy, use this syntax:

-Identity global

To return a policy configured at the per-user scope, use syntax like this:

-Identity "RedmondVoiceRoutingPolicy"

You cannot use wildcard characters when specifying the Identity.

If neither the Identity nor the Filter parameters are specified, then Get-CsVoiceRoutingPolicy returns all the voice routing policies configured for use in the organization.



**Below Content Applies To:** Skype for Business Online, Skype for Business Server 2015

Unique identifier of the voice routing policy to be retrieved.
To return the global policy, use this syntax:

-Identity global

To return a policy configured at the per-user scope, use syntax like this:

-Identity "RedmondVoiceRoutingPolicy"

You cannot use wildcard characters when specifying the Identity.

If neither the Identity nor the Filter parameters are specified, then the Get-CsVoiceRoutingPolicy cmdlet returns all the voice routing policies configured for use in the organization.



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
Get-CsVoiceRoutingPolicy does not accept pipelined input.

###  
None.
The Get-CsVoiceRoutingPolicy cmdlet does not accept pipelined input.

## OUTPUTS

###  
Get-CsVoiceRoutingPolicy returns instances of the Microsoft.Rtc.Management.WritableConfig.Policy.Voice.VoiceRoutingPolicy object.

###  
The Get-CsVoiceRoutingPolicy cmdlet returns instances of the Microsoft.Rtc.Management.WritableConfig.Policy.Voice.VoiceRoutingPolicy object.

## NOTES

## RELATED LINKS

[Grant-CsVoiceRoutingPolicy]()

[New-CsVoiceRoutingPolicy]()

[Remove-CsVoiceRoutingPolicy]()

[Set-CsVoiceRoutingPolicy]()

[Online Version](http://technet.microsoft.com/EN-US/library/60245b7d-4e95-4925-aae5-c0fa1e9f38fc(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/20057536-3de4-41cd-9389-417b2ebff690(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/60245b7d-4e95-4925-aae5-c0fa1e9f38fc(OCS.16).aspx)

