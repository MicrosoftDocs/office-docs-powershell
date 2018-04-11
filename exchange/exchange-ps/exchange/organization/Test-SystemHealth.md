---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
applicable: Exchange Server 2010
title: Test-SystemHealth
schema: 2.0.0
monikerRange: "exchserver-ps-2010"
---

# Test-SystemHealth

## SYNOPSIS
This cmdlet is available only in Exchange Server 2010.

Use the Test-SystemHealth cmdlet to gather data about your Microsoft Exchange system and to analyze the data according to best practices.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Test-SystemHealth [-ADCredentials <PSCredential>] [-Analyze] [-Collect] [-ConfigurationData <Byte[]>]
 [-ConfigurationFileLocation <LongPath>] [-Confirm] [-Description <String>] [-DomainController <Fqdn>]
 [-DownloadConfigurationUpdates] [-ExchangeCredentials <PSCredential>] [-Export] [-GenerateEvents]
 [-GenerateSQMData] [-MaxThreads <Int32>] [-MergeFileLocation <LongPath>] [-OutData]
 [-OutFileLocation <LongPath>] [-Roles <String[]>] [-ScanType <String>] [-ServerList <String[]>]
 [-Timeout <EnhancedTimeSpan>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Test-SystemHealth
```

This example gathers data about your Exchange system.

### -------------------------- Example 2 --------------------------
```
$temp=Test-SystemHealth -OutData; Set-Content -Value $temp.FileData -Path d:\temp\SystemHealthOutData.xml -Encoding Byte
```

This example saves the output data as a byte stream to the temporary variable $temp. Then the content is written to the file SystemHealthOutData.xml using the Set-Content cmdlet.

## PARAMETERS

### -ADCredentials
The ADCredentials parameter specifies the credentials used to access Active Directory. The default value is the current user's credentials.

This parameter requires the creation and passing of a credential object. This credential object is created by using the Get-Credential cmdlet. For more information, see Get-Credential (https://go.microsoft.com/fwlink/p/?linkid=142122).

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Analyze
The Analyze parameter specifies whether to enable analysis on the data gathered. A value of $true enables analysis. The default value is $true.

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

### -Collect
The Collect parameter specifies whether to enable data collection. A value of $true enables data collection. The default value is $true.

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

### -ConfigurationData
This parameter is reserved for internal Microsoft use.

```yaml
Type: Byte[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConfigurationFileLocation
This parameter is reserved for internal Microsoft use.

```yaml
Type: LongPath
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
Aliases: cf
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
The Description parameter specifies a descriptive label for the scan.

```yaml
Type: String
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

### -DownloadConfigurationUpdates
The DownloadConfigurationUpdates parameter checks for and downloads newer versions of the configuration file. The default value is $true, which checks for and downloads newer versions of the configuration file.

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

### -ExchangeCredentials
The ExchangeCredentials parameter identifies the credentials to apply for accessing servers running Exchange.

This parameter requires the creation and passing of a credential object. This credential object is created by using the Get-Credential cmdlet. For more information, see Get-Credential (https://go.microsoft.com/fwlink/p/?linkid=142122).

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Export
The Export parameter causes sensitive data to be removed from the output file specified. A value of $true causes data removal. The default value is $false.

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

### -GenerateEvents
This parameter is reserved for internal Microsoft use.

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

### -GenerateSQMData
This parameter is reserved for internal Microsoft use.

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

### -MaxThreads
This parameter is reserved for internal Microsoft use.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MergeFileLocation
This parameter is reserved for internal Microsoft use.

```yaml
Type: LongPath
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutData
The OutData switch specifies whether the output data is sent as a byte stream. For example, if you run $temp=Test-SystemHealth -OutData, $temp contains the byte stream of the output data, and you can covert it back to xml by using the Set-Content command. For a code sample, see "Example 2" later in this topic.

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

### -OutFileLocation
The OutFileLocation parameter identifies the name and path to the data file to generate.

```yaml
Type: LongPath
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Roles
This parameter is reserved for internal Microsoft use.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ScanType
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ServerList
This parameter is reserved for internal Microsoft use.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Timeout
The Timeout parameter specifies the number of seconds before the operation times out. The default value is 300 seconds (5 minutes).

```yaml
Type: EnhancedTimeSpan
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
Aliases: wi
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

[Online Version](https://technet.microsoft.com/library/65ceedf4-796d-4dda-a126-c7cd4d509f67.aspx)
