---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Online
title: Test-ApplicationAccessPolicy
schema: 2.0.0
monikerRange: "exchonline-ps"
---

# Test-ApplicationAccessPolicy

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Test-ApplicationAccessPolicy cmdlet to test application access policies.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set1
```
Test-ApplicationAccessPolicy [-Identity] <RecipientIdParameter> -AppId <String>
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Test-ApplicationAcessPolicy -Identity "Engineering Staff" -AppID 3dbc2ae1-7198-45ed-9f9f-d86ba3ec35b5
```

This example tests access to the specified app for the group "Engineering Staff".

## PARAMETERS

### -Identity
The Identity parameter specifies the recipient to test. You can use any value that uniquely identifies the recipient. For example:

- Name

- Distinguished name (DN)

- Display name

- Email address

- GUID

```yaml
Type: RecipientIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AppId
The Identity parameter specifies the GUID of the app that you want to test. To find the GUID value of an app, run the command Get-App | Format-Table -Auto DisplayName,AppId.

You can specify multiple app GUID values separated by commas.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: True
Position: Named
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

[Online Version](https://docs.microsoft.com/powershell/module/exchange/organization/test-applicationaccesspolicy)
