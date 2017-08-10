---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015
schema: 2.0.0
---

# Grant-CsDialPlan

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Assigns a dial plan to one or more users or groups.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Assigns a dial plan to one or more users or groups.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Online

Grant-CsDialPlan \[-Identity\] \<UserIdParameter\> \[-PolicyName\] \<string\> \[-Tenant \<guid\>\] \[-DomainController \<Fqdn\>\] \[-PassThru\] \[-WhatIf\] \[-Confirm\] \[\<CommonParameters\>\]



## SYNTAX

```
Grant-CsDialPlan [-Identity] <UserIdParameter> [[-PolicyName] <String>] [-DomainController <Fqdn>] [-PassThru]
 [-WhatIf] [-Confirm] [-Tenant <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

This cmdlet assigns an existing user-specific dial plan to a user.
Dial plans provide information required to enable Enterprise Voice users to make telephone calls.
Users who do not have a valid dial plan will not be enabled to make calls by using Enterprise Voice.
A dial plan determines such things as how normalization rules are applied and whether a prefix must be dialed for external calls.

You can check whether a user has been granted a per-user dial plan by calling a command in this format: Get-CsUser "\<user name\>" | Select-Object DialPlan.
For example:

Get-CsUser "Ken Myer" | Select-Object DialPlan

Who can run this cmdlet: By default, members of the following groups are authorized to run the Grant-CsDialPlan cmdlet locally: RTCUniversalUserAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Grant-CsDialPlan"}

**Below Content Applies To:** Skype for Business Online

{{Fill in the Description}}

**Below Content Applies To:** Skype for Business Server 2015

This cmdlet assigns an existing user-specific dial plan to a user.
Dial plans provide information required to enable Enterprise Voice users to make telephone calls.
Users who do not have a valid dial plan will not be enabled to make calls by using Enterprise Voice.
A dial plan determines such things as how normalization rules are applied and whether a prefix must be dialed for external calls.

You can check whether a user has been granted a per-user dial plan by calling a command in this format: Get-CsUser "\<user name\>" | Select-Object DialPlan.
For example:

Get-CsUser "Ken Myer" | Select-Object DialPlan



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Grant-CsDialPlan -Identity "Ken Myer" -PolicyName RedmondDialPlan
```

In the example shown above, Grant-CsDialPlan is used to assign the dial plan RedmondDialPlan to the user with the Identity (in this case the display name) Ken Myer.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

In the example, Grant-CsDialPlan is used to assign the dial plan RedmondDialPlan to the user with the Identity (in this case the display name) Ken Myer.

Grant-CsDialPlan -Identity "Ken Myer" -PolicyName RedmondDialPlan

### Example 1 (Skype for Business Online)
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

In the example, the Grant-CsDialPlan cmdlet is used to assign the dial plan RedmondDialPlan to the user with the Identity (in this case the display name) Ken Myer.

Grant-CsDialPlan -Identity "Ken Myer" -PolicyName RedmondDialPlan

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsUser -LDAPFilter "l=Redmond" | Grant-CsDialPlan -PolicyName RedmondDialPlan
```

In Example 2, the RedmondDialPlan dial plan is assigned to all the users who have offices in the city of Redmond.
To do this, the cmdlet Get-CsUser is invoked in order to retrieve a collection of all the users who have an office in the city of Redmond; this is done by using the LDAPFilter parameter and the LDAP query l=Redmond.
(In the LDAP query language used by Active Directory Domain Services (AD DS), the l indicates a user's locality, or city.) This collection is then piped to Grant-CsDialPlan, which assigns the Redmond dial plan to each user in the collection.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, the RedmondDialPlan dial plan is assigned to all the users who have offices in the city of Redmond.
To do this, the cmdlet Get-CsUser is invoked in order to retrieve a collection of all the users who have an office in the city of Redmond; this is done by using the LdapFilter parameter and the LDAP query l=Redmond.
(In the LDAP query language used by Active Directory Domain Services (AD DS), the l indicates a user's locality, or city.) This collection is then piped to Grant-CsDialPlan, which assigns the Redmond dial plan to each user in the collection.

Get-CsUser -LDAPFilter "l=Redmond" | Grant-CsDialPlan -PolicyName RedmondDialPlan

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, the RedmondDialPlan dial plan is assigned to all the users who have offices in the city of Redmond.
To do this, the Get-CsUser cmdlet is invoked in order to retrieve a collection of all the users who have an office in the city of Redmond; this is done by using the LdapFilter parameter and the LDAP query l=Redmond.
(In the LDAP query language used by Active Directory Domain Services, the l indicates a user's locality, or city.) This collection is then piped to the Grant-CsDialPlan cmdlet, which assigns the Redmond dial plan to each user in the collection.

Get-CsUser -LDAPFilter "l=Redmond" | Grant-CsDialPlan -PolicyName RedmondDialPlan

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

The Identity (unique identifier) of the user to whom the dial plan is being assigned.

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

The Identity value of the dial plan to be assigned to the user.
(Note that this includes only the name portion of the Identity.
Per-user dial plan identities include a prefix of tag: that should not be included with the PolicyName.)



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
Accepts a pipelined string value representing the Identity of a user account to which the dial plan is being granted.

### Microsoft.Rtc.Management.AD.UserIdParameter

## OUTPUTS

###  
When used with the PassThru parameter, returns an object of type Microsoft.Rtc.Management.ADConnect.Schema.OCSADUserOrAppContact.

### System.Object

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/730ad014-b1e8-4f0a-be78-32b1b5488b78(OCS.14).aspx)

[New-CsDialPlan]()

[Remove-CsDialPlan]()

[Set-CsDialPlan]()

[Get-CsDialPlan]()

[Test-CsDialPlan]()

[Get-CsUser]()

[Online Version](http://technet.microsoft.com/EN-US/library/730ad014-b1e8-4f0a-be78-32b1b5488b78(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/730ad014-b1e8-4f0a-be78-32b1b5488b78(OCS.16).aspx)

