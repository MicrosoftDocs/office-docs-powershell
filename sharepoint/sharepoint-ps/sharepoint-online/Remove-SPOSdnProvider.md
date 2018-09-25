---
external help file: 
applicable: SharePoint Online
title: Remove-SPOSdnProvider
schema: 2.0.0
---

# Remove-SPOSdnProvider

## SYNOPSIS
Removes SDN Support in your SharePoint Online tenant


## SYNTAX

```powershell
Remove-SPOSdnProvider [-Confirm] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Removes SDN Support in your SharePoint Online tenant


## EXAMPLES

### EXAMPLE 1
```yaml
Remove-SPOSdnProvider -Confirm:false
```

This command removes the SDN support for your Online Tenant without confirmation.

### -----------------------EXAMPLE 2-----------------------------
```yaml
Remove-SPOSdnProvider -Confirm:true -WhatIf
```

This command will prompt for a confirmation before "simulating" that it will remove the support for SDN in the current SPO tenant (-WhatIf)




## PARAMETERS

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Online

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
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).



## RELATED LINKS
[Getting started with SharePoint Online Management Shell](https://docs.microsoft.com/en-us/powershell/sharepoint/sharepoint-online/connect-sharepoint-online?view=sharepoint-ps)

[Get-SPOAppErrors](Get-SPOAppErrors.md)

[Get-SPOAppErrors](Get-SPOAppErrors.md)

[New-SPOSdnProvider](New-SPOSdnProvider.md)