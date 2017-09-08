---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Get-SPTrustedIdentityTokenIssuer

## SYNOPSIS
Below Content Applies To: SharePoint Server 2013

## SYNTAX

```
Get-SPTrustedIdentityTokenIssuer [[-Identity] <SPTrustedIdentityTokenIssuerPipeBind>]
 [-AssignmentCollection <SPAssignmentCollection>]
```

## DESCRIPTION
The Get-SPTrustedIdentityTokenIssuer cmdlet returns an identity provider.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------------------------EXAMPLE 1------------------------ (SharePoint Server 2013)
```
C:\PS>$trustedsts=Get-SPTrustedIdentityTokenIssuer "LiveIDSTS"
```

This example gets a trusted identity token issuer.

### --------------------------EXAMPLE 1------------------------ (SharePoint Server 2016)
```
C:\PS>$trustedsts = Get-SPTrustedIdentityTokenIssuer "LiveIDSTS"
```

This example gets a trusted identity token issuer.

## PARAMETERS

### -Identity
Specifies the identity provider to get.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; or a valid name of identity provider (for example, LiveID STS); or an instance of a valid SPIdentityProvider object.

```yaml
Type: SPTrustedIdentityTokenIssuerPipeBind
Parameter Sets: (All)
Aliases: 

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
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

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

