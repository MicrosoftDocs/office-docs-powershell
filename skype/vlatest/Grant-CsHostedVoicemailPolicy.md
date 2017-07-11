---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015
schema: 2.0.0
---

# Grant-CsHostedVoicemailPolicy

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Assigns a hosted voice mail policy at the per-user scope.
(The per-user scope enables you to assign policies to individual users or groups.)

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Assigns a hosted voice mail policy at the per-user scope.
(The per-user scope enables you to assign policies to individual users or groups.) This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Online

Grant-CsHostedVoicemailPolicy \[-Identity\] \<UserIdParameter\> \[-PolicyName\] \<string\> \[-Tenant \<guid\>\] \[-DomainController \<Fqdn\>\] \[-PassThru\] \[-WhatIf\] \[-Confirm\] \[\<CommonParameters\>\]



## SYNTAX

```
Grant-CsHostedVoicemailPolicy [-Identity] <UserIdParameter> [[-PolicyName] <String>] [-DomainController <Fqdn>]
 [-PassThru] [-WhatIf] [-Confirm] [-Tenant <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

This cmdlet assigns an existing user-specific hosted voice mail policy to a user.
A hosted voice mail policy specifies how to route unanswered calls to a user to a hosted Exchange Unified Messaging (UM) service.

You can check whether a user has been granted a per-user hosted voice mail policy by calling a command in this format: Get-CsUser "\<user name\>" | Select-Object HostedVoicemailPolicy.
For example:

Get-CsUser "Ken Myer" | Select-Object HostedVoicemailPolicy

If you assign to a user a hosted voice mail policy that does not include a destination, you cannot enable that user for hosted voice mail.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Grant-CsHostedVoicemailPolicy cmdlet locally: RTCUniversalUserAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Grant-CsHostedVoicemailPolicy"}

**Below Content Applies To:** Skype for Business Online

{{Fill in the Description}}

**Below Content Applies To:** Skype for Business Server 2015

This cmdlet assigns an existing user-specific hosted voice mail policy to a user.
A hosted voice mail policy specifies how to route unanswered calls to a user to a hosted Exchange Unified Messaging (UM) service.

You can check whether a user has been granted a per-user hosted voice mail policy by calling a command in this format: Get-CsUser "\<user name\>" | Select-Object HostedVoicemailPolicy.
For example:

Get-CsUser "Ken Myer" | Select-Object HostedVoicemailPolicy

If you assign to a user a hosted voice mail policy that does not include a destination, you cannot enable that user for hosted voice mail.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Grant-CsHostedVoicemailPolicy -Identity "Ken Myer" -PolicyName ExRedmond
```

This example assigns the hosted voice mail policy with the Identity ExRedmond to the user with the display name Ken Myer.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

This example assigns the hosted voice mail policy with the Identity ExRedmond to the user with the display name Ken Myer.

Grant-CsHostedVoicemailPolicy -Identity "Ken Myer" -PolicyName ExRedmond

### Example 1 (Skype for Business Online)
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

This example assigns the hosted voice mail policy with the Identity ExRedmond to the user with the display name Ken Myer.

Grant-CsHostedVoicemailPolicy -Identity "Ken Myer" -PolicyName ExRedmond

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsUser -OU "ou=Finance,ou=North America,dc=litwareinc,dc=com" | Grant-CsHostedVoicemailPolicy -PolicyName ExRedmond
```

This example assigns the hosted voice mail policy with the Identity ExRedmond to all users in the Finance organizational unit (OU): OU=Finance,OU=NorthAmerica,DC=litwareinc,DC=com.
The first part of the command calls the Get-CsUser cmdlet to retrieve all users who are enabled for Lync Server 2010 or Office Communications Server from the specified OU.
This collection of users is then piped to the Grant-CsHostedVoicemailPolicy cmdlet, which assigns the policy ExRedmond to each of these users.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

This example assigns the hosted voice mail policy with the Identity ExRedmond to all users in the Finance organizational unit (OU): OU=Finance,OU=NorthAmerica,DC=litwareinc,DC=com.
The first part of the command calls the Get-CsUser cmdlet to retrieve all users who are enabled for Lync Server or Office Communications Server from the specified OU.
This collection of users is then piped to the Grant-CsHostedVoicemailPolicy cmdlet, which assigns the policy ExRedmond to each of these users.

Get-CsUser -OU "ou=Finance,ou=North America,dc=litwareinc,dc=com" | Grant-CsHostedVoicemailPolicy -PolicyName ExRedmond

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

This example assigns the hosted voice mail policy with the Identity ExRedmond to all users in the Finance organizational unit (OU): OU=Finance,OU=NorthAmerica,DC=litwareinc,DC=com.
The first part of the command calls the Get-CsUser cmdlet to retrieve all users who are enabled for Skype for Business Server 2015 from the specified OU.
This collection of users is then piped to the Grant-CsHostedVoicemailPolicy cmdlet, which assigns the policy ExRedmond to each of these users.

Get-CsUser -OU "ou=Finance,ou=North America,dc=litwareinc,dc=com" | Grant-CsHostedVoicemailPolicy -PolicyName ExRedmond

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

The Identity (unique identifier) of the user to whom the hosted voice mail policy is being assigned.

User identities can be specified using one of four formats: 1) The user's SIP address; 2) the user's user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer); and, 4) the user's Active Directory display name (for example, Ken Myer).

Note that you can use the asterisk (*) wildcard character when using the Display Name as the user Identity.
For example, the Identity "* Smith" would return all the users with the last name Smith.

Full data type: Microsoft.Rtc.Management.AD.UserIdParameter



**Below Content Applies To:** Skype for Business Online

{{Fill Identity Description}}



```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -PolicyName
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

The name (Identity) of the hosted voice mail policy to be assigned to the user.
(Note that this includes only the name portion of the Identity.
Per-user hosted voice mail policy identities include a prefix of tag: that should not be included with the PolicyName.)



**Below Content Applies To:** Skype for Business Online

{{Fill PolicyName Description}}



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Allows you to specify a domain controller.
If no domain controller is specified, the first available will be used.



**Below Content Applies To:** Skype for Business Online

{{Fill DomainController Description}}



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassThru
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Returns the results of the command.
By default, this cmdlet does not generate any output.



**Below Content Applies To:** Skype for Business Online

{{Fill PassThru Description}}



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Describes what would happen if you executed the command without actually executing the command.



**Below Content Applies To:** Skype for Business Online

Shows what would happen if the cmdlet runs.
The cmdlet is not run.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Prompts you for confirmation before executing the command.



**Below Content Applies To:** Skype for Business Online

Prompts you for confirmation before running the cmdlet.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
{{Fill Tenant Description}}

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
String.
Accepts a pipelined string value representing the Identity of a user account to which the hosted voice mail policy is being granted.

### Microsoft.Rtc.Management.AD.UserIdParameter

## OUTPUTS

###  
When used with the PassThru parameter, returns an object of type Microsoft.Rtc.Management.ADConnect.Schema.OCSADUserOrAppContact.

### System.Object

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/ae69358f-1618-4a08-9ec2-225ded3f301f(OCS.14).aspx)

[New-CsHostedVoicemailPolicy]()

[Remove-CsHostedVoicemailPolicy]()

[Set-CsHostedVoicemailPolicy]()

[Get-CsHostedVoicemailPolicy]()

[Get-CsUser]()

[Online Version](http://technet.microsoft.com/EN-US/library/ae69358f-1618-4a08-9ec2-225ded3f301f(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/ae69358f-1618-4a08-9ec2-225ded3f301f(OCS.16).aspx)

