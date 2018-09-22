---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
applicable: Exchange Online
title: Get-ApplicationAccessPolicy
schema: 2.0.0
monikerRange: "exchonline-ps"
---

# Get-ApplicationAccessPolicy

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-ApplicationAccessPolicy cmdlet to view application access policies.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set1
```
Get-ApplicationAccessPolicy [[-Identity] <ApplicationAccessPolicyIdParameter>]
```

## DESCRIPTION
This feature applies only to apps connecting to the Microsoft Graph API for Outlook resources.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-ApplicationAcessPolicy | Format-Table -Auto Description,ScopeName,AccessRight
```

This example returns a summary list of all application access policies in the organization.

### -------------------------- Example 2 --------------------------
```
Get-ApplicationAcessPolicy -Identity "596ade3a-1abe-4c5b-b7d5-a169c4b05d4a\7a774f0c-7a6f-11e0-85ad-07fb4824019b:S-1-5-21-724521725-2336880675-2689004279-1821338;8b6ce428-cca2-459a-ac50-d38bcc932258"
```

This example returns detailed information for the specified policy.

## PARAMETERS

### -Identity
The Identity parameter specifies the application access policy that you want to view. To find the Identity value for the policy, run the command Get-ApplicationAccessPolicy | Format-List Identity,Description,ScopeName,AccessRight,AppID.

```yaml
Type: ApplicationAccessPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: True
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

[Online Version](https://docs.microsoft.com/powershell/module/exchange/organization/get-applicationaccesspolicy)
