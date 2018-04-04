---
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
applicable: Exchange Server 2010
title: Test-OutlookWebServices
schema: 2.0.0
---

# Test-OutlookWebServices

## SYNOPSIS
This cmdlet is available only in Exchange Server 2010.

Use the Test-OutlookWebServices cmdlet to verify the Autodiscover service settings for Microsoft Outlook on a computer running Microsoft Exchange Server 2010 that has the Client Access server role installed.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Test-OutlookWebServices [[-Identity] <RecipientIdParameter>]
 [-ClientAccessServer <ClientAccessServerIdParameter>] [-Confirm] [-DomainController <Fqdn>]
 [-MonitoringContext <$true | $false>] [-TargetAddress <RecipientIdParameter[]>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Test-OutlookWebServices cmdlet uses a specified e-mail address to verify that the Outlook provider is configured correctly.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
Test-OutlookWebServices -Identity:holly@contoso.com
```

This example verifies the service information that's returned to the Outlook client from the Autodiscover service for the user holly@contoso.com. The code example verifies information for the following services:


Availability service

Outlook Anywhere

Offline address book

Unified Messaging

This example tests for a connection to each service. This example also submits a request to the Availability service for the user holly@contoso.com to determine whether the user's free/busy information is being returned correctly from the Client Access server to the Outlook client.

## PARAMETERS

### -ClientAccessServer
The ClientAccessServer parameter specifies the Client Access server that the client accesses.

```yaml
Type: ClientAccessServerIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies any valid e-mail address in the forest. If you specify this parameter, incorrectly formed e-mail addresses and addresses that are outside the forest are rejected. This address is used to test the Outlook provider. This property accepts the domain and user name in the domain\\user name format or an Active Directory GUID and resolves them to the SMTP address that's needed to authenticate.

```yaml
Type: RecipientIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -MonitoringContext
The MonitoringContext parameter specifies whether the results of the command include monitoring events and performance counters. The two possible values for this parameter are $true or $false. If you specify $true, the results include monitoring events and performance counters, in addition to information about the MAPI transaction.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetAddress
The TargetAddress parameter specifies the recipient that's used to test whether Availability service data can be retrieved.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

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
Aliases:
Applicable: Exchange Server 2010

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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/c41152b0-b304-4b13-b8ea-a24e2c2c3ea8.aspx)

