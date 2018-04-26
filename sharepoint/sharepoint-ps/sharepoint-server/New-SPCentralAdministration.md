---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016
title: New-SPCentralAdministration
schema: 2.0.0
---

# New-SPCentralAdministration

## SYNOPSIS

Creates a new SharePoint Central Administration Web application.



## SYNTAX

```
New-SPCentralAdministration [[-Port] <Int32>] [[-WindowsAuthProvider] <String>]
 [-AssignmentCollection <SPAssignmentCollection>] [-SecureSocketsLayer] [<CommonParameters>]
```

## DESCRIPTION
The New-SPCentralAdministration cmdlet creates a new Central Administration Web application and starts the central administration service on the local computer.
Central Administration is available only on computers where this service runs.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE 1----------------------- 
```
PS C:\>New-SPCentralAdministration -WindowsAuthProvider NTLM -Port 8080
```

This example creates the Central Administration site at port 8080 on the local farm using NTLM authentication.


### ------------------EXAMPLE 2----------------------- 
```
PS C:\>New-SPCentralAdministration -WindowsAuthProvider Kerberos -Port 443 -SecureSocketsLayer
```

This example creates the Central Administration site using SSL on port 443 with Kerberos authentication.


## PARAMETERS

### -Port
Specifies the port number for Central Administration.
If no port is specified, a nonconflicting port number is auto-generated.

The type must be a valid port number.

If you specify a port number that has already been assigned, IIS does not start the new site until you change either the port number of the new site or the port number of the old site.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -WindowsAuthProvider
Specifies the authorization provider for this Web application.
If no authentication provider is specified, the default value NTLM is used.

The type must be one of two values: Kerberos or NTLM.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -SecureSocketsLayer
Enables Secure Socket Layer (SSL) encryption for the specified port. If you choose to use SSL, you must assign a server certificate to the Central Administration IIS web site by using the IIS administration tools. The Central Administration web application won't be accessible until you do this.

The default value is False.

If this parameter is omitted or set to False the Central Administration site will use HTTP for the specified port.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

