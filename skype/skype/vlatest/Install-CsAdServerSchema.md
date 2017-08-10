---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Install-CsAdServerSchema

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Extends the Active Directory schema to allow for the installation of Microsoft Lync Server 2010.

**Below Content Applies To:** Lync Server 2013

Extends the Active Directory schema to allow for the installation of Lync Server.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Extends the Active Directory schema to allow for the installation of Skype for Business Server 2015.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Install-CsAdServerSchema [-GlobalCatalog <Fqdn>] [-GlobalSettingsDomainController <Fqdn>] [-Ldf <String>]
 [-Force] [-Report <String>] [-WhatIf] [-Confirm] [-SchemaMaster <Fqdn>] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Although Lync Server 2010 stores most of its configuration information in its own database, the software also relies on Active Directory Domain Services (AD DS) as a storage location; for example, user-related information is stored as part of the user's Active Directory account.
In order to do this, Lync Server 2010 must store these values in attributes that are not part of the typical Active Directory user account.
In turn, that means you must "extend" your Active Directory schema: the schema must be modified to add custom attributes (and other items) required by Lync Server 2010.

The easiest way to extend the Active Directory schema is to use the Install-CsAdServerSchema cmdlet.
Install-CsAdServerSchema is typically run as part of the Lync Server 2010 setup process but, if need be, administrators can run the cmdlet at any time.
After the cmdlet finishes running, you can then use Get-CsAdServerSchema to verify that the schema has been updated and that Active Directory is ready for the next step in the installation process.

Note that, when Install-CsAdServerSchema runs, the cmdlet must have access to the Schema Master, the operations master role that manages Active Directory object and attribute definitions.
If you are running Install-CsAdServerSchema on a computer other than the Schema Master, the computer that hosts the Schema Master must allow remote access to the registry.
If it does not, then you must run Install-CsAdServerSchema on the Schema Master itself.

The functions carried out by Install-CsAdServerSchema are similar to those carried out by the following Microsoft Office Communications Server 2007 R2 command:

Lcscmd.exe /forest /action:SchemaPrep /SchemaType:Server

Who can run this cmdlet: You must be an Active Directory schema administrator in the root domain and a local administrator on the schema master computer in order to run the Install-CsAdServerSchema cmdlet locally.

**Below Content Applies To:** Lync Server 2013

Although Lync Server stores most of its configuration information in its own database, the software also relies on Active Directory Domain Services (AD DS) as a storage location; for example, user-related information is stored as part of the user's Active Directory account.
In order to do this, Lync Server must store these values in attributes that are not part of the typical Active Directory user account.
In turn, that means you must "extend" your Active Directory schema: the schema must be modified to add custom attributes (and other items) required by Lync Server.

The easiest way to extend the Active Directory schema is to use the Install-CsAdServerSchema cmdlet.
Install-CsAdServerSchema is typically run as part of the Lync Server setup process but, if need be, administrators can run the cmdlet at any time.
After the cmdlet finishes running, you can then use Get-CsAdServerSchema to verify that the schema has been updated and that Active Directory is ready for the next step in the installation process.

Note that, when Install-CsAdServerSchema runs, the cmdlet must have access to the schema master, the operations master role that manages Active Directory object and attribute definitions.
If you are running Install-CsAdServerSchema on a computer other than the schema master, the computer that hosts the schema master must allow remote access to the registry.
If it does not, then you must run Install-CsAdServerSchema on the schema master itself.

The functions carried out by Install-CsAdServerSchema are similar to those carried out by the following Microsoft Office Communications Server 2007 R2 command:

Lcscmd.exe /forest /action:SchemaPrep /SchemaType:Server

Who can run this cmdlet: You must be an Active Directory schema administrator in the root domain and a local administrator on the schema master computer in order to run the Install-CsAdServerSchema cmdlet locally.

**Below Content Applies To:** Skype for Business Server 2015

Although Skype for Business Server 2015 stores most of its configuration information in its own database, the software also relies on Active Directory Domain Services as a storage location; for example, user-related information is stored as part of the user's Active Directory account.
In order to do this, Skype for Business Server 2015 must store these values in attributes that are not part of the typical Active Directory user account.
In turn, that means you must "extend" your Active Directory schema: the schema must be modified to add custom attributes (and other items) required by Skype for Business Server 2015.

The easiest way to extend the Active Directory schema is to use the Install-CsAdServerSchema cmdlet.
The Install-CsAdServerSchema cmdlet is typically run as part of the Skype for Business Server 2015 setup process but, if need be, administrators can run the cmdlet at any time.
After the cmdlet finishes running, you can then use the Get-CsAdServerSchema cmdlet to verify that the schema has been updated and that Active Directory is ready for the next step in the installation process.

Note that, when the Install-CsAdServerSchema cmdlet runs, the cmdlet must have access to the schema master, the operations master role that manages Active Directory object and attribute definitions.
If you are running the Install-CsAdServerSchema cmdlet on a computer other than the schema master, the computer that hosts the schema master must allow remote access to the registry.
If it does not, then you must run the Install-CsAdServerSchema cmdlet on the schema master itself.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Install-CsAdServerSchema
```

The command shown in Example 1 determines the location of the .LDF file by reading information from the registry, then uses that file to update the Active Directory schema.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 determines the location of the .LDF file by reading information from the registry, then uses that file to update the Active Directory schema.

Install-CsAdServerSchema

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 determines the location of the .LDF file by reading information from the registry, then uses that file to update the Active Directory schema.

Install-CsAdServerSchema

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Install-CsAdServerSchema -Ldf "C:\Schemas"
```

In Example 2, the Active Directory schema is updated with information taken from a schema update file located in the folder C:\Schemas.
This folder location is specified by using the Ldf parameter.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, the Active Directory schema is updated with information taken from a schema update file located in the folder C:\Schemas.
This folder location is specified by using the Ldf parameter.

Install-CsAdServerSchema -Ldf "C:\Schemas"

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, the Active Directory schema is updated with information taken from a schema update file located in the folder C:\Schemas.
This folder location is specified by using the Ldf parameter.

Install-CsAdServerSchema -Ldf "C:\Schemas"

## PARAMETERS

### -GlobalCatalog
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Fully qualified domain name (FQDN) of a global catalog server in your domain.
This parameter is not required if you are running Install-CsAdServerSchema on a computer with an account in your domain.



**Below Content Applies To:** Skype for Business Server 2015

Fully qualified domain name (FQDN) of a global catalog server in your domain.
This parameter is not required if you are running the Install-CsAdServerSchema cmdlet on a computer with an account in your domain.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GlobalSettingsDomainController
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

FQDN of a domain controller in your domain.
This parameter is not required if you are running Install-CsAdServerSchema on a computer with an account in your domain.



**Below Content Applies To:** Skype for Business Server 2015

FQDN of a domain controller in your domain.
This parameter is not required if you are running the Install-CsAdServerSchema cmdlet on a computer with an account in your domain.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Ldf
**Below Content Applies To:** Lync Server 2010

Path to the folder containing the .LDF file to be imported; the .LDF (LDAP Data Interchange Format) file contains the required updates for the Active Directory schema.
If this parameter is not included, Install-CsAdServerSchema will look for the file in the Lync Server 2010 installation path recorded in the registry.
The installation path will typically be C:\Program Files\Microsoft Lync Server 2010\Deployment\Setup.



**Below Content Applies To:** Lync Server 2013

Path to the folder containing the .LDF file to be imported; the .LDF (LDAP Data Interchange Format) file contains the required updates for the Active Directory schema.
If this parameter is not included, Install-CsAdServerSchema will look for the file in the Lync Server installation path recorded in the registry.
The installation path will typically be C:\Program Files\Microsoft Lync Server 2010\Deployment\Setup.



**Below Content Applies To:** Skype for Business Server 2015

Path to the folder containing the .LDF file to be imported; the .LDF (LDAP Data Interchange Format) file contains the required updates for the Active Directory schema.
If this parameter is not included, the Install-CsAdServerSchema cmdlet will look for the file in the Skype for Business Server 2015 installation path recorded in the registry.
The installation path will typically be C:\Program Files\Skype for Business Server 2015\Deployment\Setup.



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Report
Enables you to specify a file path for the log file created when the cmdlet runs.
For example: -Report "C:\Logs\ServerSchema.html"

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
Install-CsAdServerSchema does not accept pipelined input.

###  
None.
The Install-CsAdServerSchema cmdlet does not accept pipelined input.

## OUTPUTS

###  
Install-CsAdServerSchema does not return any values or objects.

###  
The Install-CsAdServerSchema cmdlet does not return any values or objects.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/86e13601-7e80-4276-b176-77d9c6e7d55a(OCS.14).aspx)

[Get-CsAdServerSchema]()

[Online Version](http://technet.microsoft.com/EN-US/library/86e13601-7e80-4276-b176-77d9c6e7d55a(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/86e13601-7e80-4276-b176-77d9c6e7d55a(OCS.16).aspx)

