---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Install-CsAdServerSchema
schema: 2.0.0
---

# Install-CsAdServerSchema

## SYNOPSIS

Extends the Active Directory schema to allow for the installation of Skype for Business Server.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Install-CsAdServerSchema [-GlobalCatalog <Fqdn>] [-GlobalSettingsDomainController <Fqdn>] [-Ldf <String>]
 [-Force] [-Report <String>] [-WhatIf] [-Confirm] [-SchemaMaster <Fqdn>] [<CommonParameters>]
```

## DESCRIPTION

Although Skype for Business Server stores most of its configuration information in its own database, the software also relies on Active Directory Domain Services as a storage location; for example, user-related information is stored as part of the user's Active Directory account.
In order to do this, Skype for Business Server must store these values in attributes that are not part of the typical Active Directory user account.
In turn, that means you must "extend" your Active Directory schema: the schema must be modified to add custom attributes (and other items) required by Skype for Business Server.

The easiest way to extend the Active Directory schema is to use the Install-CsAdServerSchema cmdlet.
The Install-CsAdServerSchema cmdlet is typically run as part of the Skype for Business Server setup process but, if need be, administrators can run the cmdlet at any time.
After the cmdlet finishes running, you can then use the Get-CsAdServerSchema cmdlet to verify that the schema has been updated and that Active Directory is ready for the next step in the installation process.

Note that, when the Install-CsAdServerSchema cmdlet runs, the cmdlet must have access to the schema master, the operations master role that manages Active Directory object and attribute definitions.
If you are running the Install-CsAdServerSchema cmdlet on a computer other than the schema master, the computer that hosts the schema master must allow remote access to the registry.
If it does not, then you must run the Install-CsAdServerSchema cmdlet on the schema master itself.



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- 
```

Install-CsAdServerSchema
```

The command shown in Example 1 determines the location of the .LDF file by reading information from the registry, then uses that file to update the Active Directory schema.

### -------------------------- EXAMPLE 2 -------------------------- 
```

Install-CsAdServerSchema -Ldf "C:\Schemas"
```

In Example 2, the Active Directory schema is updated with information taken from a schema update file located in the folder C:\Schemas.
This folder location is specified by using the Ldf parameter.


## PARAMETERS

### -GlobalCatalog

Fully qualified domain name (FQDN) of a global catalog server in your domain.
This parameter is not required if you are running the Install-CsAdServerSchema cmdlet on a computer with an account in your domain.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GlobalSettingsDomainController

FQDN of a domain controller in your domain.
This parameter is not required if you are running the Install-CsAdServerSchema cmdlet on a computer with an account in your domain.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Ldf

Path to the folder containing the .LDF file to be imported; the .LDF (LDAP Data Interchange Format) file contains the required updates for the Active Directory schema.
If this parameter is not included, the Install-CsAdServerSchema cmdlet will look for the file in the Skype for Business Server installation path recorded in the registry.
The installation path will typically be C:\Program Files\Skype for Business Server\Deployment\Setup.



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Report
Enables you to specify a file path for the log file created when the cmdlet runs.
For example: `-Report "C:\Logs\ServerSchema.html"`

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SchemaMaster
Fully qualified domain name (FQDN) of the Active Directory schema master for your domain.
This parameter is not required if you are running the Install-CsAdServerSchema cmdlet on a computer with an account in your domain.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
None.
The Install-CsAdServerSchema cmdlet does not accept pipelined input.

## OUTPUTS

###  
The Install-CsAdServerSchema cmdlet does not return any values or objects.

## NOTES

## RELATED LINKS

[Get-CsAdServerSchema](Get-CsAdServerSchema.md)


