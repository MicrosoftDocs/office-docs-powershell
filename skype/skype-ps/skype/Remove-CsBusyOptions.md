---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Skype for Business Server 2015, Skype for Business Server 2019
title: Remove-CsBusyOptions
schema: 2.0.0
---

# Remove-CsBusyOptions

## SYNOPSIS
Removes the settings for processing of incoming calls for users is already in communication whether for a call, conference or placed call waiting. This cmdlet was introduced in Skype for Business Server 2015 June 2016 Cumulative Update.

## SYNTAX

```
Remove-CsBusyOptions [-Identity] <UserIdParameter> [-Confirm] [-PassThru] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet removes configuration information about Busy Options for a specific user.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsBusyOptions -Identity "Ken Myer"
```

This example removes Busy Options for "Ken Myer".

## PARAMETERS

### -Confirm
Prompts you for confirmation before running the cmdlet.

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

### -Identity
Indicates the Identity of the user account to be modified. User Identities can be specified using one of four formats: 1) the user's SIP address; 2) the user's user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer) and 4) the user's Active Directory display name (for example, Ken Myer). User Identities can also be referenced by using the user's Active Directory distinguished name.

You can use the asterisk (*) wildcard character when using the display name as the user Identity. For example, the Identity "*Smith" returns all the users who have a display name that ends with the string value "Smith".

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -PassThru
Returns an object representing the item with which you are working. By default, this cmdlet does not generate any output.

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
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

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
Microsoft.Rtc.Management.AD.UserIdParameter object.

## OUTPUTS

###  
This cmdlet does not return any objects.

## NOTES

## RELATED LINKS
[Get-CsBusyOptions](https://docs.microsoft.com/en-us/powershell/module/skype/get-csbusyoptions?view=skype-ps)

[Set-CsBusyOptions](https://docs.microsoft.com/en-us/powershell/module/skype/set-csbusyoptions?view=skype-ps)
