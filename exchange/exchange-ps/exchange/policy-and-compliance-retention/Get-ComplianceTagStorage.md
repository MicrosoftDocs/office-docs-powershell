---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
applicable: Exchange Online, Office 365 Security & Compliance Center
title: Get-ComplianceTagStorage
schema: 2.0.0
monikerRange: "exchonline-ps || o365scc-ps"
---

# Get-ComplianceTagStorage

## SYNOPSIS
This cmdlet is available only in the Office 365 Security & Compliance Center. For more information, see Office 365 Security & Compliance Center PowerShell (https://technet.microsoft.com/library/mt587091.aspx).

Use the Get-ComplianceTagStorage cmdlet to confirm that you've created the label policy by using the Enable-ComplianceTagStorage cmdlet. Labels apply retention settings to content.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-ComplianceTagStorage [[-Identity] <PolicyIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see Permissions in Office 365 Security & Compliance Center (https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-ComplianceTagStorage
```

This example confirms that you've created the label policy in your organization.

## PARAMETERS

### -Identity
The Identity parameter specifies the label policy that you want to view. You can use any value that uniquely identifies the policy. For example:

- Name (GUID value)

- Distinguished name (DN)

- GUID (a different value than Name)

However, there can be only one label policy in your organization.

```yaml
Type: PolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Office 365 Security & Compliance Center

Required: False
Position: 1
Default value: None
Accept pipeline input: True
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

[Online Version](https://technet.microsoft.com/library/18d8ecc1-8084-4905-bc6a-a1f5199d280b.aspx)
