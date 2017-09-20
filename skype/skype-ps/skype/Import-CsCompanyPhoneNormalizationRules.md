---
external help file: 
applicable: Skype for Business Server 2015
title: Import-CsCompanyPhoneNormalizationRules
schema: 2.0.0
---

# Import-CsCompanyPhoneNormalizationRules

## SYNOPSIS
Use the Import-CsCompanyPhoneNormalizationRules cmdlet to import custom phone normalization rules defined in Company_Phone_Number_Normalization_Rules.txt used in previous server versions into Skype for Business Server environments.

## SYNTAX

### Identity
```
Import-CsCompanyPhoneNormalizationRules [[-Identity] <XdsIdentity>] -FileName <String> [-Confirm] [-Force]
 [-WhatIf] [<CommonParameters>]
```

### Instance
```
Import-CsCompanyPhoneNormalizationRules -FileName <String> [-Confirm] [-Force] [-Instance <PSObject>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Address Book phone normalization rule configurations have been migrated from the plain text file Company_Phone_Number_Normalization_Rules.txt to central management configuration in Skype for Business Server for easier and more convenient manageability.
In order for the Skype for Business Server Address Book service to pick up custom normalization rules, normalization rule definitions must be in the central management configuration store.
The Import-CsCompanyPhoneNormalizationRules cmdlet reads all custom normalization rules defined in the file specified by the FileName parameter and ensures the same normalization rules exist in the central management configuration store.
Company_Phone_Number_Normalization_Rules.txt and phone normalization rules defined in central management store must be kept in sync until the environment is fully migrated to Skype for Business Server.

The Import-CsCompanyPhoneNormalizationRules cmdlet uses GUID names for the new normalization rules as name is required in the Skype for Business Server configuration schema, and does not exist in the legacy normalization file format.
These GUID names can be replaced with more appropriate values by using Set-CsAddressBookNormalizationConfiguration cmdlet after the migration is completed.

Alternatively, the New-CsAddressBookNormalizationConfiguration and Set-CsAddressBookNormalizationConfiguration cmdlets can also be used to keep custom normalization rule definitions in sync.

## EXAMPLES

### -------------------------- Example 1 -------------------------- 
```

Import-CsCompanyPhoneNormalizationRules -Filename "C:\Data\Company_Phone_Number_Normalization_Rules.txt" -Identity Global
```

This example reads the phone normalization rules at the specified path and applies them globally.


## PARAMETERS

### -FileName
Specifies the full path to the input Company_Phone_Number_Normalization_Rules.txt file.
For example:

`-FileName "C:\Data\Company_Phone_Number_Normalization_Rules.txt"`

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: True
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
Applicable: Skype for Business Server 2015

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
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Unique identifier for the address book normalization configuration settings to be updated.
To modify the global settings, use this syntax:

`-Identity global`

To modify settings configured at the site scope:

`-Identity site:Redmond`

To modify settings at the service level:

`-Identity service:Registrar:atl-cs-001.litwareinc.com`

Note that address book normalization configuration settings can only be applied to the Registrar service.
An error will occur if you try to apply these settings to any other service.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Skype for Business Server 2015

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
None

## OUTPUTS

###  
None

## NOTES

## RELATED LINKS

[Set-CsAddressBookNormalizationConfiguration]()

[Remove-CsAddressBookNormalizationConfiguration]()

[New-CsAddressBookNormalizationConfiguration]()

[Get-CsAddressBookNormalizationConfiguration]()

