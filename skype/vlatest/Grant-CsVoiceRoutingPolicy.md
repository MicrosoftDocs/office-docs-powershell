---
applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015
schema: 2.0.0
---

# Grant-CsVoiceRoutingPolicy

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Assigns a per-user voice routing policy to one or more users.
Voice routing policies manage PSTN usages for users of hybrid voice.
Hybrid voice enables users homed on Office 365 to take advantage of the Enterprise Voice capabilities available in an on-premises installation of Lync Server 2013 Preview.
This cmdlet was introduced in Lync Server 2013 Preview.

**Below Content Applies To:** Skype for Business Online

Use the Grant-CsVoiceRoutingPolicy cmdlet to assign a per-user voice routing policy to one or more users.
In Skype for Business Online, voice routing policies are used to determine if users can make international calls as well as taking advantage of the other Enterprise Voice capabilities available in an on-premises installation of Skype for Business Server 2015.

**Below Content Applies To:** Skype for Business Server 2015

Assigns a per-user voice routing policy to one or more users.
Voice routing policies manage PSTN usages for users of hybrid voice.
Hybrid voice enables users homed on Skype for Business Online to take advantage of the Enterprise Voice capabilities available in an on-premises installation of Skype for Business Server 2015.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

```
Grant-CsVoiceRoutingPolicy [-Identity] <UserIdParameter> [[-PolicyName] <String>] [-Confirm]
 [-DomainController <Fqdn>] [-PassThru] [-WhatIf] [-Tenant <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2013

Voice routing policies are used in "hybrid" scenarios: when some of your users are homed on the on-premises version of Microsoft Lync Server 2013 Preview and other users are homed on the Office 365 version of Lync Server.
Assigning your Office 365 users a voice routing policy enables those users to receive and to place phones calls to the public switched telephone network by using your on-premises SIP trunks.

Note that simply assigning a user a voice routing policy will not enable them to make PSTN calls via Office 365.
Among other things, you will also need to enable those users for Enterprise Voice and will need to assign them an appropriate voice policy and dial plan.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Grant-CsVoiceRoutingPolicy"}

Lync Server Control Panel: The functions carried out by the Grant-CsVoiceRoutingPolicy cmdlet are not available in the Lync Server Control Panel.

**Below Content Applies To:** Skype for Business Online

Voice routing policies are used in "hybrid" scenarios: when some of your users are homed on the on-premises version of Skype for Business Server 2015 and other users are homed on Skype for Business Online.
Assigning your Skype for Business Online users a voice routing policy enables those users to receive and to place phones calls to the public switched telephone network by using your on-premises SIP trunks.

Skype for Business Online supports two predefined routing policies.
One allows international calls and the other doesn't.
They are named respectively InternationalCallsAllowed, and InternationalCallsDisallowed.
Granting one of these policies to a user will either allow or disallow international calling for that user.

Simply assigning a user a voice routing policy will not enable them to make PSTN calls via Skype for Business Online.
Among other things, you will also need to enable those users for Enterprise Voice and will need to assign them an appropriate voice policy and dial plan.

The functions carried out by the Grant-CsVoiceRoutingPolicy cmdlet are not available in the Skype for Business Server Control Panel or the Skype for Business Online admin center.

**Below Content Applies To:** Skype for Business Server 2015

Voice routing policies are used in "hybrid" scenarios: when some of your users are homed on the on-premises version of Skype for Business Server 2015 and other users are homed on Skype for Business Online.
Assigning your Skype for Business Online users a voice routing policy enables those users to receive and to place phones calls to the public switched telephone network by using your on-premises SIP trunks.

Note that simply assigning a user a voice routing policy will not enable them to make PSTN calls via Skype for Business Online.
Among other things, you will also need to enable those users for Enterprise Voice and will need to assign them an appropriate voice policy and dial plan.

Skype for Business Server Control Panel: The functions carried out by the Grant-CsVoiceRoutingPolicy cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 assigns the per-user voice routing policy RedmondVoiceRoutingPolicy to the user with the Active Directory display name "Ken Myer".

Grant-CsVoiceRoutingPolicy -Identity "Ken Myer" -PolicyName "RedmondVoiceRoutingPolicy"

### -------------------------- Example 1 -------------------------- (Skype for Business Online)
```

```

This example assigns the per-user voice routing policy "RedmondVoiceRoutingPolicy" to the user with the Active Directory display name "Ken Myer".

Grant-CsVoiceRoutingPolicy -Identity "Ken Myer" -PolicyName "RedmondVoiceRoutingPolicy"

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 assigns the per-user voice routing policy RedmondVoiceRoutingPolicy to the user with the Active Directory display name "Ken Myer".

Grant-CsVoiceRoutingPolicy -Identity "Ken Myer" -PolicyName "RedmondVoiceRoutingPolicy"

### -------------------------- Example 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, any per-user voice routing policy previously assigned to the user Ken Myer is unassigned from that user; as a result, Ken Myer will be managed by the global voice routing policy.
To unassign a per-user policy, set the PolicyName to a null value ($Null).

Grant-CsVoiceRoutingPolicy -Identity "Ken Myer" -PolicyName $Null

### -------------------------- Example 2 -------------------------- (Skype for Business Online)
```

```

This example removes any per-user voice routing policy previously assigned to the user Ken Myer.
Ken Myer will be managed by the global voice routing policy.
To unassign a per-user policy, set the PolicyName parameter to null ($Null).

Grant-CsVoiceRoutingPolicy -Identity "Ken Myer" -PolicyName $Null

### -------------------------- Example 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, any per-user voice routing policy previously assigned to the user Ken Myer is unassigned from that user; as a result, Ken Myer will be managed by the global voice routing policy.
To unassign a per-user policy, set the PolicyName to a null value ($Null).

Grant-CsVoiceRoutingPolicy -Identity "Ken Myer" -PolicyName $Null

### -------------------------- Example 3 -------------------------- (Lync Server 2013)
```

```

Example 3 assigns the per-user voice routing policy RedmondVoiceRoutingPolicy to all the users in the Redmond OU in Active Directory.
To do this, the command first calls Get-CsUser along with the OU parameter; the parameter value "OU=Redmond,dc=litwareinc,dc=com" limits the returned data to user accounts in the Redmond OU.
Those user accounts are then piped to the Grant-CsVoiceRoutingPolicy cmdlet, which assigns each user the voice routing policy RedmondVoiceRoutingPolicy.

Get-CsUser -OU "OU=Redmond,dc=litwareinc,dc=com" | Grant-CsVoiceRoutingPolicy -PolicyName "RedmondVoiceRoutingPolicy"

### -------------------------- Example 3 -------------------------- (Skype for Business Online)
```

```

This example assigns the per-user voice routing policy "RedmondVoiceRoutingPolicy" to all the users in the Redmond OU in Active Directory.
To do this, the command first calls the Get-CsUser cmdlet long with the OU parameter; the parameter value "OU=Redmond,dc=litwareinc,dc=com" limits the returned data to user accounts in the Redmond OU.
Those user accounts are then piped to the Grant-CsVoiceRoutingPolicy cmdlet, which assigns each user the voice routing policy RedmondVoiceRoutingPolicy.

Get-CsUser -OU "OU=Redmond,dc=litwareinc,dc=com" | Grant-CsVoiceRoutingPolicy -PolicyName "RedmondVoiceRoutingPolicy"

### -------------------------- Example 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 assigns the per-user voice routing policy RedmondVoiceRoutingPolicy to all the users in the Redmond OU in Active Directory.
To do this, the command first calls the Get-CsUser cmdlet long with the OU parameter; the parameter value "OU=Redmond,dc=litwareinc,dc=com" limits the returned data to user accounts in the Redmond OU.
Those user accounts are then piped to the Grant-CsVoiceRoutingPolicy cmdlet, which assigns each user the voice routing policy RedmondVoiceRoutingPolicy.

Get-CsUser -OU "OU=Redmond,dc=litwareinc,dc=com" | Grant-CsVoiceRoutingPolicy -PolicyName "RedmondVoiceRoutingPolicy"

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2013

Indicates the Identity of the user account to be assigned the per-user voice routing policy.
User Identities are typically specified using one of four formats: 1) the user's SIP address; 2) the user's user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (four example, litwareinc\kenmyer); and, 4) the user's Active Directory display name (for example, Ken Myer).

User Identities can also be specified by using the user's Active Directory distinguished name.

In addition, you can use the asterisk (*) wildcard character when using the Display Name as the user Identity.
For example, the Identity "* Smith" returns all the users who have a display name that ends with the string value " Smith".



**Below Content Applies To:** Skype for Business Online, Skype for Business Server 2015

Indicates the Identity of the user account to be assigned the per-user voice routing policy.
User Identities are typically specified using one of four formats: 1) the user's SIP address; 2) the user's user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer); and, 4) the user's Active Directory display name (for example, Ken Myer).

User Identities can also be specified by using the user's Active Directory distinguished name.

In addition, you can use the asterisk (*) wildcard character when using the Display Name as the user Identity.
For example, the Identity "* Smith" returns all the users who have a display name that ends with the string value " Smith".



```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Confirm
**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Prompts you for confirmation before executing the command.



**Below Content Applies To:** Skype for Business Online

The Confirm switch causes the command to pause processing, and requires confirmation to proceed.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Enables you to connect to the specified domain controller in order to retrieve user information.
To connect to a particular domain controller, include the DomainController parameter followed by the computer name (for example, atl-dc-001) or its fully qualified domain name (FQDN) (for example, atl-dc-001.litwareinc.com).



**Below Content Applies To:** Skype for Business Online

This parameter is reserved for internal Microsoft use.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassThru
Enables you to pass a user object through the pipeline that represents the user account being assigned the voice routing policy.
By default, the Grant-CsVoiceRoutingPolicy cmdlet does not pass objects through the pipeline.

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

### -PolicyName
"Name" of the policy to be assigned.
The PolicyName is simply the policy Identity minus the policy scope (the "tag:" prefix).
For example, a policy with the Identity tag:Redmond has a PolicyName equal to Redmond; likewise, a policy with the Identity tag:RedmondVoiceRoutingPolicy has a PolicyName equal to RedmondVoiceRoutingPolicy.

To unassign a per-user policy previously assigned to a user, set the PolicyName to a null value ($Null).

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Describes what would happen if you executed the command without actually executing the command.



**Below Content Applies To:** Skype for Business Online

The WhatIf switch causes the command to simulate its results.
By using this switch, you can view what changes would occur without having to commit those changes.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
PARAMVALUE: Guid

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
String value or Microsoft.Rtc.Management.ADConnect.Schema.ADUser object.
Grant-CsVoiceRoutingPolicy accepts pipelined input of string values representing the Identity of a user account.
The cmdlet also accepts pipelined input of user objects.

###  
String value or Microsoft.Rtc.Management.ADConnect.Schema.ADUser object.
The Grant-CsVoiceRoutingPolicy cmdlet accepts pipelined input of string values representing the Identity of a user account.
The cmdlet also accepts pipelined input of user objects.

## OUTPUTS

###  
By default, Grant-CsVoiceRoutingPolicy does not return a value or object.
However, if you include the PassThru parameter, the cmdlet will return instances of the Microsoft.Rtc.Management.ADConnect.Schema.OCSUserOrAppContact.

###  
By default, the Grant-CsVoiceRoutingPolicy cmdlet does not return a value or object.
However, if you include the PassThru parameter, the cmdlet will return instances of the Microsoft.Rtc.Management.ADConnect.Schema.OCSUserOrAppContact.

## NOTES

## RELATED LINKS

[Get-CsVoiceRoutingPolicy]()

[New-CsVoiceRoutingPolicy]()

[Remove-CsVoiceRoutingPolicy]()

[Set-CsVoiceRoutingPolicy]()

[Online Version](http://technet.microsoft.com/EN-US/library/a7c7b6c4-925a-464c-a3ee-8373f4eb46b2(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/00fa3565-f08b-4d3e-a704-06001b8512af(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/a7c7b6c4-925a-464c-a3ee-8373f4eb46b2(OCS.16).aspx)

