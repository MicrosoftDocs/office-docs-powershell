---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Skype for Business Server 2015, Skype for Business Server 2019
title: Grant-CsCallViaWorkPolicy
schema: 2.0.0
---

# Grant-CsCallViaWorkPolicy

## SYNOPSIS
Use the Grant-CsCallViaWorkPolicy cmdlet to assign call via work policies to a user or group of users.
Call via work policies enable and manage the characteristics of outbound calls placed through the Skype for Business client.

## SYNTAX

```
Grant-CsCallViaWorkPolicy [-Identity] <UserIdParameter> [-PolicyName] <String> [-Confirm]
 [-DomainController <Fqdn>] [-PassThru] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
To return a list of all the Role-Based Access Control (RBAC) roles a cmdlet has been assigned to (including any custom RBAC roles you have created), run the following command from the Windows PowerShell prompt.

`Get-CsAdminRole | Where-Object {$_.Cmdlets -Match "\<DesiredCmdletName\>"}`

## EXAMPLES

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

Grant-CsCallViaWorkPolicy -Identity "Ken Myer" -PolicyName StandardUserCvW
```

This example assigns the policy named "StandardUserCvW" to "Ken Myer".


## PARAMETERS

### -Identity
Specifies a unique identifier of the user account the policy should be assigned to.
User identities can be specified by using one of four formats.

SIP address

User Principal Name (UPN)

Domain name and logon name, in the form domain\logon

Active Directory display name (Ken Myer), or distinguished name

In addition, you can use the asterisk (*) wildcard character when using the display name as the user Identity.
For example, the Identity "* Smith" grants the policy all users who have a display name that ends in the string value " Smith".

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -PolicyName
Specifies the name of the policy to be assigned.
The PolicyName is the policy identity minus the policy scope ("tag:").
A policy that has an identity of "Tag:Redmond" has a PolicyName of "Redmond".
A policy with the identity "Tag:RedmondCalloutPolicy" has a PolicyName of "RedmondCalloutPolicy".
If you set PolicyName to a null value, then the command will unassign any individual policy assigned to the user.
For example: `Grant-CsCallViaWorkPolicy -Identity "Ken Myer" -PolicyName $Null`

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
Enables you to specify the fully qualified domain name (FQDN) of a domain controller to be contacted when assigning the new policy.
If this parameter is not specified, then the Grant-CsCallViaWorkPolicy cmdlet will contact the first available domain controller.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassThru
Enables you to pass a user object through the pipeline that represents the user being assigned the policy.
By default, the Grant-CsCallViaWorkPolicy cmdlet does not pass objects through the pipeline.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

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
None.

## OUTPUTS

###  
None.

## NOTES

## RELATED LINKS

[Remove-CsCallViaWorkPolicy](Remove-CsCallViaWorkPolicy.md)

[Set-CsCallViaWorkPolicy](Set-CsCallViaWorkPolicy.md)

[New-CsCallViaWorkPolicy](New-CsCallViaWorkPolicy.md)

[Get-CsCallViaWorkPolicy](Get-CsCallViaWorkPolicy.md)


