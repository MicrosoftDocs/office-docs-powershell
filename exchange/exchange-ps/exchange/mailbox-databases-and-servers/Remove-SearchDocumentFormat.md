---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
applicable: Exchange Server 2013, Exchange Server 2016
title: Remove-SearchDocumentFormat
schema: 2.0.0
monikerRange: "exchserver-ps-2013 || exchserver-ps-2016"
---

# Remove-SearchDocumentFormat

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Remove-SearchDocumentFormat cmdlet to remove a format-specific filter from those used by Exchange search. Only filters added with New-SearchDocumentFormat can be removed.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Remove-SearchDocumentFormat [-Identity] <SearchDocumentFormatId> [-Confirm] [-Server <ServerIdParameter>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
After running the Remove-SearchDocumentFormat cmdlet, your must run the following cmdlet to restart the search service. There will be a brief search outage.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-SearchDocumentFormat -Identity sct
```

This example removes the search document format with an identity equal to "sct".

## PARAMETERS

### -Identity
The Identity parameter uniquely identifies the format to be removed. You can use the Get-SearchDocumentFormat cmdlet to view the identities of the installed formats.

```yaml
Type: SearchDocumentFormatId
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New and Set cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Server
The Server parameter specifies the Exchange server where you want to run this command. You can use any value that uniquely identifies the server. For example:

- Name

- FQDN

- Distinguished name (DN)

- Exchange Legacy DN

If you don't use this parameter, the command is run on the local server.

```yaml
Type: ServerIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/a476ea8b-ff7d-4209-b39d-4e3d2705d4db.aspx)
