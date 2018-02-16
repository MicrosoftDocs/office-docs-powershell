---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Test-FederationTrust

## SYNOPSIS
!!! Exchange Server 2010

Use the Test-FederationTrust cmdlet to verify that the federation trust is properly configured and functioning as expected.

!!! Exchange Server 2013, Exchange Server 2016

This cmdlet is available only in on-premises Exchange.

Use the Test-FederationTrust cmdlet to verify that the federation trust is properly configured and functioning as expected.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Test-FederationTrust [-Confirm] [-DomainController <Fqdn>] [-MonitoringContext <$true | $false>]
 [-UserIdentity <RecipientIdParameter>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

You can run the Test-FederationTrust cmdlet from the Exchange Management Shell, or a monitoring system can run the test periodically.

The Test-FederationTrust cmdlet runs the following series of tests to ensure that federation is working as expected:

- A connection to the Microsoft Federation Gateway is established. This test ensures that communication between the local Exchange server and the Microsoft Federation Gateway is working correctly.

- Certificates are checked to ensure they're valid and can be used with the Microsoft Federation Gateway.

- A security token is requested from the Microsoft Federation Gateway. This test ensures that a token can be properly retrieved and used.

You must run the Test-FederationTrust cmdlet from either an Exchange Server 2010 Hub Transport or Client Access server.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Federation trusts" entry in the Exchange and Shell Infrastructure Permissions topic.

!!! Exchange Server 2013

You can run the Test-FederationTrust cmdlet from the Exchange Management Shell, or a monitoring system can run the test periodically.

The Test-FederationTrust cmdlet runs the following series of tests to ensure that federation is working as expected:

- A connection to the Microsoft Federation Gateway is established. This test ensures that communication between the local Exchange server and the Microsoft Federation Gateway is working correctly.

- Certificates are checked to ensure they're valid and can be used with the Microsoft Federation Gateway.

- A security token is requested from the Microsoft Federation Gateway. This test ensures that a token can be properly retrieved and used.

You must run the Test-FederationTrust cmdlet from either an Exchange Mailbox or Client Access server.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Federation trusts" entry in the Exchange and Shell infrastructure permissions topic.

!!! Exchange Server 2016

The first time you use this cmdlet, you might be required to create a test user. To create a test user, run the following command.

You can run the Test-FederationTrust cmdlet from the Exchange Management Shell, or a monitoring system can run the test periodically.

The Test-FederationTrust cmdlet runs the following series of tests to ensure that federation is working as expected:

- A connection to the Microsoft Federation Gateway is established. This test ensures that communication between the local Exchange server and the Microsoft Federation Gateway is working correctly.

- Certificates are checked to ensure they're valid and can be used with the Microsoft Federation Gateway.

- A security token is requested from the Microsoft Federation Gateway. This test ensures that a token can be properly retrieved and used.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Test-FederationTrust
```

This example validates the federation trust deployed in the Exchange 2010 organization and checks whether a security token can be retrieved from the Microsoft Federation Gateway.

### Example 1 -------------------------- (Exchange Server 2013)
```
Test-FederationTrust
```

This example validates the federation trust deployed in the Exchange organization and checks whether a security token can be retrieved from the Microsoft Federation Gateway.

### Example 1 -------------------------- (Exchange Server 2016)
```
Test-FederationTrust
```

This example validates the federation trust deployed in the Exchange organization and checks whether a security token can be retrieved from the Microsoft Federation Gateway.

## PARAMETERS

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MonitoringContext
!!! Exchange Server 2010

The MonitoringContext parameter specifies whether additional troubleshooting information should be returned. The additional information returned by the monitoring context is used by Microsoft System Center Operations Manager 2007. Valid input for this parameter is $true or $false.



!!! Exchange Server 2013

The MonitoringContext parameter includes or excludes the associated monitoring events and performance counters in the results. Valid input for this parameter is $true or $false. The default value is $false. If you specify the value $true, the monitoring events and performance counters are included in the command results. Typically, you include the monitoring events and performance counters in the results when the output is passed to Microsoft System Center Operations Manager 2007 or System Center 2012 - Operations Manager.



!!! Exchange Server 2016

The MonitoringContext parameter specifies whether to include the associated monitoring events and performance counters in the results. Valid values for this parameter are $true or $false. The default value is $false. If you specify the value $true, the monitoring events and performance counters are included in the command results. Typically, you include the monitoring events and performance counters in the results when the output is passed to MicrosoftSystem Center Operations Manager (SCOM).



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserIdentity
!!! Exchange Server 2010, Exchange Server 2013

The UserIdentity parameter specifies a mailbox user to request a token for. If a mailbox user isn't specified, the command uses the default test mailbox.

If the default test mailbox isn't present, the test fails. You can create the default test mailbox using the New-TestCasConnectivityUser.ps1 script found in the Scripts folder of the Exchange installation. The test mailbox only needs to be created once.



!!! Exchange Server 2016

The UserIdentity parameter specifies a mailbox user to request a token for. If a mailbox user isn't specified, the command uses the default test mailbox.



```yaml
Type: RecipientIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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

[Online Version](https://technet.microsoft.com/library/4af0c419-2302-4b67-a460-237e90425354.aspx)

