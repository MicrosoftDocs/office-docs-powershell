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

Use the Get-InformationBarrierRecipientStatus cmdlet to see whether specific user accounts are subject to information barrier policies and segments. You create segments by using the New-OrganizationSegment cmdlet.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-InformationBarrierRecipientStatus [-Identity] <RecipientIdParameter> [[-Identity2] <RecipientIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see Permissions in Office 365 Security & Compliance Center (https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-InformationBarrierRecipientStatus -Identity meganb
```

This example returns the segment and policy assignment information for the user meganb.

### -------------------------- Example 2 --------------------------
```
Get-InformationBarrierRecipientStatus -Identity meganb -Identity2 alexw
```

This example returns the information barrier policy information

In this example, we refer to two user accounts in Office 365: *meganb* for *Megan*, and *alexw* for *Alex*.

## PARAMETERS

### -Identity
The Identity parameter specifies the recipient that you want to view the segment and policy assignment information for. You can use any value that uniquely identifies the recipient. For example:

- Name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

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

### -Identity2
The Identity2 parameter specifies an optional second recipient that you want to view in relation to the first recipient specified by the Identity parameter. You can use any value that uniquely identifies the second recipient. For example:

- Name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

```yaml
Type: RecipientIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: True
Position: 1
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
