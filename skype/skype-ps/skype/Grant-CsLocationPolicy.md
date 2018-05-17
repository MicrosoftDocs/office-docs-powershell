---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Grant-CsLocationPolicy
schema: 2.0.0
---

# Grant-CsLocationPolicy

## SYNOPSIS

Assigns an Enhanced 9-1-1 (E9-1-1) location policy to individual users or groups.
The E9-1-1 service enables those who answer 911 calls to determine the caller's geographic location.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Grant-CsLocationPolicy [-Identity] <UserIdParameter> [[-PolicyName] <String>] [-DomainController <Fqdn>]
 [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

The location policy is used to apply settings that relate to E9-1-1 functionality.
The location policy determines whether a user is enabled for E9-1-1, and if so, what the behavior is of an emergency call.
For example, you can use the location policy to define what number constitutes an emergency call (911 in the United States), whether corporate security should be automatically notified, and how the call should be routed.
This cmdlet grants a location policy to a specific user or group.

IMPORTANT: The location policy behaves differently from other policies in Skype for Business Server in terms of order of scope.
For all other policies, if a policy is defined at the per-user scope, the policy is applied to any user granted that policy.
If the user has not been granted a per-user policy, the site policy is applied.
If there is no site policy, the global policy is applied.
Location policies are applied in the same way, with one exception: a per-user location policy can also be assigned to a network site.
(A network site consists of a group of subnets.) If the user is making the emergency call from a location that is mapped to a network site within the organization, the user-level policy assigned to that network site is used.
This functionality will override a per-user policy that has been granted to that user.
If the user calls from a location that is unknown or unmapped in the organization, the standard policy scoping will be applied.



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- 
```

Grant-CsLocationPolicy -Identity "Ken Myer" -PolicyName Reno
```

In Example 1, the Grant-CsLocationPolicy cmdlet is used to assign the Reno location policy to user Ken Myer.


### -------------------------- EXAMPLE 2 -------------------------- 
```

Get-CsUser -LDAPFilter "Department=Accounting" | Grant-CsLocationPolicy -PolicyName AccountingArea
```

In Example 2, the AccountingArea policy is assigned to all the users who are in the Accounting department.
To return a collection of all the users in the Accounting department, the Get-CsUser cmdlet is used along with the LDAPFilter parameter.
The query value passed to LDAPFilter--"Department=Accounting"--returns all the users who have an Active Directory Department setting of Accounting.
This collection is then passed to the Grant-CsLocationPolicy cmdlet, which proceeds to assign the AccountingArea policy to each user in the collection.


### -------------------------- EXAMPLE 3 -------------------------- 
```

Grant-CsLocationPolicy -Identity "Ken Myer" -PolicyName Reno -PassThru | Select-Object DisplayName, LocationPolicy
```

This example grants the location policy Reno to the user with the Identity (in this case, the display name) Ken Myer.
In addition, the example includes the parameter PassThru, which will cause the user information for user Ken Myer to be displayed after the location policy has been granted.
However, rather than immediately displaying the user information to the console, that information is piped to the Select-Object cmdlet, which will display only the DisplayName and LocationPolicy properties of the user.

One thing to notice with this example is that the newly granted location policy will appear in the output under LocationPolicy, but it will appear as an Anchor value rather than as a policy name.
(An Anchor value is a numeric value automatically assigned to a policy at the time it is created.) To see that the policy name has been applied, run the command `Get-CsUser -Identity "Ken Myer" | Select-Object DisplayName, LocationPolicy.`


## PARAMETERS

### -Identity
Indicates the Identity of the user account the policy should be assigned to.
User identities can be specified using one of four formats: 1) The user's SIP address; 2) the user's user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer); and, 4) the user's Active Directory display name (for example, Ken Myer).
Note that the SAMAccountName cannot be used as an identity.

In addition, you can use the asterisk (*) wildcard character when using the Display Name as the user Identity.
For example, the Identity "* Smith" would grant the policy to all the users with the last name Smith.

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -DomainController
Allows you to specify a domain controller.
If no domain controller is specified, the first available will be used.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassThru
Including this parameter (which does not take a value) displays the user information when the cmdlet completes.
Normally there is no output when this cmdlet is run.

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

### -PolicyName
The Identity of the location policy to apply to the user.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
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

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
String.
Accepts a pipelined string value representing the Identity of a user account to which the location policy is being granted.

## OUTPUTS

###  
When used with the PassThru parameter, returns an object of type Microsoft.Rtc.Management.ADConnect.Schema.OCSADUserOrAppContact.

## NOTES

## RELATED LINKS

[New-CsLocationPolicy](New-CsLocationPolicy.md)

[Remove-CsLocationPolicy](Remove-CsLocationPolicy.md)

[Set-CsLocationPolicy](Set-CsLocationPolicy.md)

[Get-CsLocationPolicy](Get-CsLocationPolicy.md)

[Test-CsLocationPolicy](Test-CsLocationPolicy.md)

[Get-CsUser](Get-CsUser.md)
