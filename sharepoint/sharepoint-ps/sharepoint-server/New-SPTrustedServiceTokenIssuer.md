---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: New-SPTrustedServiceTokenIssuer
schema: 2.0.0
---

# New-SPTrustedServiceTokenIssuer

## SYNOPSIS
Creates a trust with a SharePoint farm.


## SYNTAX

### ImportCertificateParameterSet
```
New-SPTrustedServiceTokenIssuer [-Name] <String> -Certificate <X509Certificate2>
 [-AssignmentCollection <SPAssignmentCollection>] [-Description <String>] [-Confirm] [-WhatIf]
 [<CommonParameters>]
```

### MetadataEndPointParameterSet
```
New-SPTrustedServiceTokenIssuer [-Name] <String> [-AssignmentCollection <SPAssignmentCollection>]
 [-Description <String>] [-Confirm] -MetadataEndPoint <Uri> [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The `New-SPTrustedServiceTokenIssuer` cmdlet creates a trust with a SharePoint farm.
If a certificate file is used, it must have only one X509 certificate without private keys, otherwise an exception is raised.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### ------------------EXAMPLE 1------------------
```
PS C:\>$cert = Get-PfxCertificate C:\LiveIDSigningCert.pfx
PS C:\>New-SPTrustedServiceTokenIssuer -Name "WFEFarm1" -Description "WFE Farm 1" -Certificate $cert
```

This example shows how to create a new SharePoint Farm trust using the trust certificate from a file.


## PARAMETERS

### -Name
Specifies the name of the trust.

The type must be a valid name of a trusted service issuer; for example, WFEFarmTrust1.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Certificate
The type must be a name of a valid X.509 certificate; for example, Certificate1.

Specifies the X.509 certificate object from trusted authentication provider farm.

```yaml
Type: X509Certificate2
Parameter Sets: ImportCertificateParameterSet
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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
If objects are not immediately used, or disposed of by using the `Stop-SPAssignment` command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Description
Specifies a description for the trust.

The type must be a valid string; for example, WFE Farm Trust1.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MetadataEndPoint
Specifies the URI for the metadata endpoint of the trusted provider.

```yaml
Type: Uri
Parameter Sets: MetadataEndPointParameterSet
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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
