---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
applicable: Exchange Server 2016
title: Get-ExchangeSettings
schema: 2.0.0
monikerRange: "exchserver-ps-2016"
---

# Get-ExchangeSettings

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-ExchangeSettings cmdlet to view customized Exchange setting objects that are stored in Active Directory. Use the New-ExchangeSettings to create the settings object, and the Set-ExchangeSettings cmdlet to define the actual settings.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-ExchangeSettings [[-Identity] <ExchangeSettingsIdParameter>] [-ConfigName <String>]
 [-Database <DatabaseIdParameter>] [-Diagnostic] [-DiagnosticArgument <String>] [-DomainController <Fqdn>]
 [-Force] [-GenericScopeName <String>] [-GenericScopes <String[]>] [-GenericScopeValue <String>]
 [-Organization <OrganizationIdParameter>] [-Process <String>] [-Server <ServerIdParameter>] [-User <Guid>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-ExchangeSettings
```

This example returns a summary list of all Exchange setting objects.

### -------------------------- Example 2 --------------------------
```
Get-ExchangeSettings -Identity Audit | Format-List
```

This example returns a summary list of all Exchange setting objects.

## PARAMETERS

### -ConfigName
The ConfigName parameter filter the results by the specified property name. The value you specify is visible in the EffectiveSetting property.

The available values are determined by the schema of the Exchange setting object.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Database
The Database parameter filters the results by mailbox database. You can use any value that uniquely identifies the database. For example:

- Name

- Distinguished name (DN)

- ExchangeLegacyDN

- GUID

```yaml
Type: DatabaseIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Diagnostic
The Diagnostic switch specifies whether to return extremely detailed information in the results. Typically, you use this switch only at the request of Microsoft Customer Service and Support to troubleshoot problems.

The detailed information is visible in the DiagnosticInfo property.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DiagnosticArgument
The DiagnosticArgument parameter modifies the results that are returned by using the Diagnostic switch. Typically, you use the Diagnostic switch and the DiagnosticArgument parameter only at the request of Microsoft Customer Service and Support to troubleshoot problems.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016
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
Applicable: Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GenericScopeName
The GenericScopeName parameter filters the results by the scope. The available values are determined by the schema of the Exchange setting object.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GenericScopes
The GenericScopes parameter filters the results by the scope. The available values are determined by the schema of the Exchange setting object. This parameter uses the syntax `"<key1>=<value1>","<key2>=<value2>"..."<keyN>=<valueN>"`.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GenericScopeValue
The GenericScopeValue parameter filters the results by the value of the scope specified by the GenericScopeName parameter. The available values are determined by the schema of the Exchange setting object.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the name of the Exchange setting object. You can use any value that uniquely identifies the object. For example:

- Name

- Distingushed name (DN)

- GUID

```yaml
Type: ExchangeSettingsIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016
Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Organization
This parameter is reserved for internal Microsoft use.

```yaml
Type: OrganizationIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Process
The Process parameter filters the results by the specified process. The available values are determined by the schema of the Exchange setting object.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Server
The Server parameter filters the results by Exchange server. You can use any value that uniquely identifies the sever. For example:

- Name

- Distinguished name (DN)

- ExchangeLegacyDN

- GUID

```yaml
Type: ServerIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -User
The User parameter filters the results by user. You identify the user by their GUID value (for example, 87246450-1b19-4c81-93dc-1a4200eff66c). To find the GUID for a user, run the following command: `Get-User <UserIdentity> | Format-List Name,GUID`.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016
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

[Online Version](https://technet.microsoft.com/library/40557a97-7cc0-45b7-8b49-7fee2a1d7dc3.aspx)
