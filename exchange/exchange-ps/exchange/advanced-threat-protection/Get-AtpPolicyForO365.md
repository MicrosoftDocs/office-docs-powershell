---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
applicable: Exchange Online, Exchange Online Protection
title: Get-AtpPolicyForO365
schema: 2.0.0
monikerRange: "exchonline-ps || eop-ps"
---

# Get-AtpPolicyForO365

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-AtpPolicyForO365 cmdlet to view the Advanced Threat Protection (ATP) policy in Office 365. The ATP policy enables the following protections:

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-AtpPolicyForO365 [[-Identity] <AtpPolicyForO365IdParameter>] [<CommonParameters>]
```

## DESCRIPTION
Safe Links is a feature in Advanced Threat Protection that checks links in email messages to see if they lead to malicious web sites. For more information, see ATP safe links in Office 365 (https://go.microsoft.com/fwlink/p/?linkid=846016).

ATP can also protect files in SharePoint Online, OneDrive for Business and Microsoft Teams by preventing users from opening and downloading files that are identified as malicious. For more information, see Office 365 Advanced Threat Protection for SharePoint, OneDrive and Teams (https://go.microsoft.com/fwlink/p/?linkid=857638).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-AtpPolicyForO365
```

This example returns detailed information about the ATP policy named Default

## PARAMETERS

### -Identity
The Identity parameter specifies the ATP policy that you want to modify. There's only one policy named Default.

```yaml
Type: AtpPolicyForO365IdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection
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

[Online Version](https://technet.microsoft.com/library/4649aa3a-e49d-42ba-84e8-ef2871fa2b58.aspx)
