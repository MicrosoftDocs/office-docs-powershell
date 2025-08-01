---
applicable: Skype for Business Server 2019
author: tomkau
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: SkypeForBusiness
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/skype/grant-csipphonepolicy
schema: 2.0.0
title: Grant-CsIPPhonePolicy, Skype for Business Server 2019
---

# Grant-CsIPPhonePolicy

## SYNOPSIS
Use the Grant-CsIPPhonePolicy cmdlet to assign an Internet Protocol (IP) phone policy to a user or a group of users.
IP phone policies determine the features of Microsoft Teams, Skype for Business Online, or Skype for Business Server 2019 that are available to users.
For example, you might enable the Better Together Over Ethernet feature for some users while disabling it for others.

## SYNTAX

### Identity (Default)
```
Grant-CsIPPhonePolicy [[-Identity] <UserIdParameter>] [-PolicyName] <String> [-Tenant <Guid>]
 [-DomainController <Fqdn>] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### GrantToTenant
```
Grant-CsIPPhonePolicy [-PolicyName] <String> [-Tenant <Guid>] [-DomainController <Fqdn>] [-PassThru]
 [-Global] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Microsoft Teams or Skype for Business Online uses IP phone policies to determine the features and capabilities that are available to users.
IP phone policies are applied each time a user accesses the system, regardless of where the user logs on from.

## EXAMPLES

### Example 1
```
Grant-CsIPPhonePolicy -Identity "Ken Myer" -PolicyName SkypePolicy
```

This example assigns the IP phone policy "SkypePolicy" to the user with the identity "Ken Myer".


### Example 2
```
Get-CsUser -LDAPFilter "Department=Sales" | Grant-CsIPPhonePolicy -PolicyName SalesPolicy
```

This example assigns all the users in the "Sales" department to the "SalesPolicy" IP phone policy.
The command first uses the Get-CsUser cmdlet and the LdapFilter parameter to return a collection of all the users who are members of the "Sales" department.
This collection of users is piped to the Grant-CsIPPhonePolicy cmdlet, which assigns "SalesPolicy" to each user in the collection.


## PARAMETERS

### -DomainController
This parameter is reserved for internal Microsoft use.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Specifies the identity of the target user.
Acceptable values include:

Example: jphillips@contoso.com

Example: sip:jphillips@contoso.com

Example: 98403f08-577c-46dd-851a-f0460a13b03d

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams, Skype for Business Server 2019

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassThru
Including this switch enables you to pass a user object through the pipeline that represents the user account being assigned the voice routing policy.
By default, the Grant-CsIPPhonePolicy cmdlet does not pass objects through the pipeline.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PolicyName
Specifies the name of the policy to be assigned.
The PolicyName is the policy Identity minus the policy scope ("tag:").
For example, a policy that has the identity "tag:Redmond" has a PolicyName equal to "Redmond".
If you set PolicyName to a null value, then the command will unassign any per-user policy assigned to the user.
For example: `Grant-CsIPPhonePolicy -Identity "Ken Myer" -PolicyName $Null`

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams, Skype for Business Server 2019

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
This parameter is reserved for internal Microsoft use.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch causes the command to pause processing, and requires confirmation to proceed.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
applicable: Microsoft Teams, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch causes the command to simulate its results.
By using this switch, you can view what changes would occur without having to commit those changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
applicable: Microsoft Teams, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

### Microsoft.Rtc.Management.ADConnect.Schema.ADUser
The Grant-CsIPPhonePolicy cmdlet accepts pipelined input of Microsoft.Rtc.Management.ADConnect.Schema.ADUser objects.

## OUTPUTS

### Microsoft.Rtc.Management.ADConnect.Schema.OCSUserOrAppContact
By default, the Grant-CsIPPhonePolicy cmdlet returns no objects or values.
However, if you include the PassThru parameter, the cmdlet will return instances of the Microsoft.Rtc.Management.ADConnect.Schema.OCSUserOrAppContact object.

## NOTES

## RELATED LINKS

[Get-CsIPPhonePolicy](Get-CsIPPhonePolicy.md)

[Set-CsIPPhonePolicy](Set-CsIPPhonePolicy.md)
