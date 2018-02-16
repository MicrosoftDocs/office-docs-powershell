---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: New-SPODataConnectionSetting
schema: 2.0.0
---

# New-SPODataConnectionSetting

## SYNOPSIS
Creates a new Business Data Connectivity service connection.


## SYNTAX

```
New-SPODataConnectionSetting -AuthenticationMode <ODataAuthenticationMode> -ServiceAddressURL <Uri>
 -ServiceContext <SPServiceContextPipeBind> -Name <String> [-AssignmentCollection <SPAssignmentCollection>]
 [-ExtensionProvider <String>] [-SecureStoreTargetApplicationId <String>] [<CommonParameters>]
```


## DESCRIPTION
Use the `New-SPODataConnectionSetting` cmdlet to create a new Business Data Connectivity service connection and its associated metadata properties in the farm.
To see the metadata settings, use the `Get-SPODataConnectionSettingMetaData` cmdlet.

This cmdlet applies to an on-premises environment only.
You cannot use this command in the SharePoint Online Management Shell.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### ------------------EXAMPLE------------------
```
C:\PS>New-SPODataConnectionSetting -Name "ContosoServiceApp" -ServiceContext "http://contoso" -ServiceAddressURL "https://expensereporting.cloudapp.net/expensereporting.svc" -AuthenticationMode "Credentials" -SecureStoreTargetApplicationId "DallasUserName"
```

This example creates a new Business Data Connectivity service connection named ContosoServiceApp.

In this process, a Microsoft Business Connectivity Services connection metadata object is created.


## PARAMETERS

### -AuthenticationMode
Specifies the type of authentication mode required for the Business Connectivity Services connection.

The value for the authentication mode is any one of the following options:

```yaml
Type: ODataAuthenticationMode
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ServiceAddressURL
Specifies the URL for the OData service.
The URL does not have be Internet facing.
This is the final destination from which data is retrieved.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ServiceContext
Specifies the service context which is in the form of an instance of an SPServiceContext object, an SPSiteAdministration object identifier, or a SPSite object.
An example of a service context value is an identifier from the ID field, a string identifier, a URI, or a string representation of a GUID.

```yaml
Type: SPServiceContextPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
Specifies the name of the Business Connectivity Services connection object.

```yaml
Type: String
Parameter Sets: (All)
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
If objects are not immediately used, or disposed of by using the `Stop-SPAssignment` command, an out-of-memory scenario can occur.

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

### -ExtensionProvider
{{Fill ExtensionProvider Description}}


```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SecureStoreTargetApplicationId
Specifies the Secure Store Target Application ID.
Works in conjunction with the AuthenticationMode parameter.

The value for the SecureStoreTargetApplicationId parameter is any one of the following options:

--Credentials
--WindowsCredentials
--DigestCredentials
--ClientCertificate

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
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

[Get-SPODataConnectionSetting](Get-SPODataConnectionSetting.md)

[Remove-SPODataConnectionSetting](Remove-SPODataConnectionSetting.md)

[Set-SPODataConnectionSetting](Set-SPODataConnectionSetting.md)
