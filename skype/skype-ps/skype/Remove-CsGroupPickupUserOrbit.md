---
external help file: 
applicable: Skype for Business Server 2015, Skype for Business Server 2019
title: Remove-CsGroupPickupUserOrbit
schema: 2.0.0
---

# Remove-CsGroupPickupUserOrbit

## SYNOPSIS
Use the `Remove-CsGroupPickupUserOrbit` cmdlet to remove the associated group pickup orbit number for an Enterprise Voice user.
This effectively disables the user for group call pickup.

## SYNTAX

```
Remove-CsGroupPickupUserOrbit [-User] <String> [-Confirm] [-Force] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet will throw an exception if the user does not have an assigned group pickup orbit number.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsGroupPickupUserOrbit sip:ken.myer@contoso.com
```

This example removes the group pickup orbit number and disables group pickup for a user specified by the SIP address.
User is a positional parameter.
The first parameter after the cmdlet is assumed to be the User parameter value.


## PARAMETERS

### -User
Specifies the user whose group pickup orbit number will be removed.
Because User is a positional parameter, the -User syntax is not required.
The first parameter after the cmdlet is assumed to be the User parameter value.

Users can be specified using one of four formats: 1) the user's SIP address; 2) the user's user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer) and 4) the user's Active Directory display name (for example, Ken Myer).
You can also reference a user account by using the user's Active Directory distinguished name.

```yaml
Type: String
Parameter Sets: (All)
Aliases: DisplayName, SipAddress, Identity
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
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

### -Force
Suppresses the display of any non-fatal error messages and completes the cmdlet operation.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
This cmdlet supports pipelined input from the Get-CsUser cmdlet.

## OUTPUTS

###  
None.

## NOTES

## RELATED LINKS

