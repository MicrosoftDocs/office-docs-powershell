---
applicable: Exchange Online, Exchange Online Protection
schema: 2.0.0
---

# Get-PhishFilterPolicy

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-PhishFilterPolicy cmdlet to view the phish filter policy and detected spoofed sending activities in your cloud-based organization.

This cmdlet is only available in Office 365 Enterprise E5, or with Advanced Threat Protection licenses.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-PhishFilterPolicy [[-Identity] <HostedConnectionFilterPolicyIdParameter>] [-Detailed]
 [-SpoofAllowBlockList] [<CommonParameters>]
```

## DESCRIPTION
The Get-PhishFilterPolicy with the SpoofAllowBlockList switch returns the following information:

- TrueSender: The true sending domain that's found in the DNS record of the source messaging server. If no domain is found, the source messaging server's IP address is shown.

- MailVolume: The number of messages that were sent to your organization from this source messaging server in the last 30 days.

- UserComplaints: The number of junk submissions from your users about mail from the source messaging server in the last 30 days.

- AllowedToSpoof: The three possible values are Yes (messages that contain any spoofed sender email addresses in your organization are allowed from the source messaging server), No (messages that contain any spoofed sender email addresses in your organization are not allowed from the source messaging server) and Partial (messages that contain some spoofed sender email addresses in your organization are allowed from the source messaging server. Use the Detailed switch to see the specific sender email addresses.).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
Get-PhishFilterPolicy -Identity Default -SpoofAllowBlockList
```

This example returns a summary list of senders that appear to be spoofing your organization.

### Example 2
```
Get-PhishFilterPolicy -Identity Default -SpoofAllowBlockList | Export-CSV "C:\My Documents\Summary Spoofed Senders.csv"
```

This example exports the summary list of spoofed senders to a CSV file.

### Example 3
```
Get-PhishFilterPolicy -Identity Default -SpoofAllowBlockList -Detailed
```

This example returns a detailed list of senders that appear to be spoofing your organization.

### Example 4
```
Get-PhishFilterPolicy -Identity Default -SpoofAllowBlockList -Detailed | Export-CSV "C:\My Documents\Detailed Spoofed Senders.csv"
```

This example exports the detailed list of spoofed senders to a CSV file.

## PARAMETERS

### -Detailed
The Detailed switch specifies whether to return detailed information in the results. You don't need to specify a value with this switch.

When you use this switch, the following additional information is returned in the results:

- SpoofedSender: The visible spoofed sender email address that the message appears to be from.

- AuthenticationResult: The possible values are Passed (the sender passed authentication checks [for example, DomainKeys Identified Mail or DKIM]), Failed (the sender failed authentication checks), or Unknown (he result is not known).

- SourceOfAllowedToSpoof Verdict: The possible values are Set by the phish filter, or Set by administrator.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the phish filter policy that you want to view. The only available value is Default.

```yaml
Type: HostedConnectionFilterPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -SpoofAllowBlockList
The SpoofAllowBlockList switch specifies whether to return a summary view of detected spoof activity. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

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

[Online Version](https://technet.microsoft.com/library/d3ef544f-de92-4563-8603-3990b8939453.aspx)
