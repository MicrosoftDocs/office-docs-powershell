---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
applicable: Office 365 Security & Compliance Center
title: Get-InformationBarrierRecipientStatus
schema: 2.0.0
monikerRange: "o365scc-ps"
---

# Get-InformationBarrierRecipientStatus

## SYNOPSIS
This cmdlet is available only in the Office 365 Security & Compliance Center. For more information, see Office 365 Security & Compliance Center PowerShell (https://technet.microsoft.com/library/mt587091.aspx).

Use the Get-InformationBarrierRecipientStatus cmdlet to see whether specific user accounts are included in a segment and assigned an information barrier policy. Segments are defined by using certain attributes in [Azure Active Directory](https://docs.microsoft.com/office365/securitycompliance/information-barriers-attributes).

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-InformationBarrierRecipientStatus [-Identity] <RecipientIdParameter> [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see Permissions in Office 365 Security & Compliance Center (https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-InformationBarrierRecipientStatus -Identity meganb -Identity2 alexw
```

In this example, we refer to two user accounts in Office 365: *meganb* for *Megan*, and *alexw* for *Alex*.

### -------------------------- Example 2 --------------------------
```
Get-InformationBarrierRecipientStatus -Identity meganb
```
In this example, we refer to one user account in Office 365: *meganb*.


## PARAMETERS

### -Identity
{{Fill Identity Description}}

```yaml
Type: RecipientIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS

[Online Version](https://docs.microsoft.com/powershell/module/exchange/policy-and-compliance/get-informationbarrierrecipientstatus)

[Attributes for information barrier policies](https://docs.microsoft.com/office365/securitycompliance/information-barriers-attributes)

[Define policies for information barriers](https://docs.microsoft.com/office365/securitycompliance/information-barriers-policies)

[New-InformationBarrierPolicy](New-InformationBarrierPolicy.md)
