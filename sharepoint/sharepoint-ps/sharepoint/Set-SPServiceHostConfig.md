---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Set-SPServiceHostConfig

## SYNOPSIS
**Below Content Applies To:**SharePoint Server 2013

Applies to:

**Below Content Applies To:**SharePoint Server 2016

Configures one or more common settings for all Web services.



## SYNTAX

### SslCertificateReference
```
Set-SPServiceHostConfig [-Identity] <SPIisWebServiceSettings> -SslCertificateThumbprint <String>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-HttpPort <Int32>] [-HttpsPort <Int32>]
 [-NetTcpPort <Int32>] [-NoWait] [-SslCertificateStoreName <String>] [-WhatIf] [<CommonParameters>]
```

### SslCertificateImport
```
Set-SPServiceHostConfig [-Identity] <SPIisWebServiceSettings> [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-HttpPort <Int32>] [-HttpsPort <Int32>] [-ImportSslCertificate <X509Certificate2>]
 [-NetTcpPort <Int32>] [-NoWait] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

The Set- SPServiceHostConfig cmdlet configures one or more common settings for all Web services.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE----------------------- (SharePoint Server 2013)
```
C:\PS>Set-SPServiceHostConfig -Port 12345
```

This example sets the HTTP port for the Web services.

### ------------------EXAMPLE----------------------- (SharePoint Server 2016)
```
C:\PS>Set-SPServiceHostConfig -Port 12345
```

This example sets the HTTP port for the Web services.

## PARAMETERS

### -Identity
Specifies the identity of the Web service application to configure.

```yaml
Type: SPIisWebServiceSettings
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -SslCertificateThumbprint
Specifies the thumbprint of the SSL certificate to retrieve for secure protocols.

```yaml
Type: String
Parameter Sets: SslCertificateReference
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssignmentCollection
Manages objects for the purpose of proper disposal.
Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management.
Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory.
When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store.
If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: get-help about_commonparameters

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HttpPort
Specifies the new port for the Web service.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: Port
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HttpsPort
Specifies the new secure port for the Web service.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: SecurePort
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ImportSslCertificate
Specifies the SSL Certificate to use for secure protocols.

```yaml
Type: X509Certificate2
Parameter Sets: SslCertificateImport
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NetTcpPort
Sets the TCP port for the Web service.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NoWait
For more information, see TechNet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SslCertificateStoreName
Specifies the thumbprint of the SSL certificate to retrieve for secure protocols.

```yaml
Type: String
Parameter Sets: SslCertificateReference
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: get-help about_commonparameters

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

