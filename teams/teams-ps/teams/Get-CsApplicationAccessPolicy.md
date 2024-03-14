---
external help file: MicrosoftTeams-help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/skype/get-csapplicationaccesspolicy
schema: 2.0.0
---

# Get-CsApplicationAccessPolicy

## SYNOPSIS
Retrieves information about the application access policy configured for use in the tenant.

## SYNTAX

### Identity (Default)
```
Get-CsApplicationAccessPolicy [[-Identity] <String>] [<CommonParameters>]
```

### Filter
```
Get-CsApplicationAccessPolicy [-Filter <String>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet retrieves information about the application access policy configured for use in the tenant.

## EXAMPLES

### Retrieve all application access policies
```
PS C:\> Get-CsApplicationAccessPolicy
```

The command shown above returns information of all application access policies that have been configured for use in the tenant.

### Retrieve specific application access policy
```
PS C:\> Get-CsApplicationAccessPolicy -Identity "ASimplePolicy"
```

In the command shown above, information is returned for a single application access policy: the policy with the Identity ASimplePolicy.

## PARAMETERS

### -Filter
{{ Fill Filter Description }}

```yaml
Type: String
Parameter Sets: Filter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Unique identifier assigned to the policy when it was created.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[New-CsApplicationAccessPolicy]()

[Grant-CsApplicationAccessPolicy]()

[Set-CsApplicationAccessPolicy]()

[Remove-CsApplicationAccessPolicy]()

