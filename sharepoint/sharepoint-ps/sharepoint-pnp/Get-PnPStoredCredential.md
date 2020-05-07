---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnpstoredcredential
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
schema: 2.0.0
title: Get-PnPStoredCredential
---

# Get-PnPStoredCredential

## SYNOPSIS
Get a credential

## SYNTAX 

```powershell
Get-PnPStoredCredential -Name <String>
                        [-Type <CredentialType>]
```

## DESCRIPTION
Returns a stored credential from the Windows Credential Manager

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPStoredCredential -Name O365
```

Returns the credential associated with the specified identifier

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPStoredCredential -Name testEnvironment -Type OnPrem
```

Gets the credential associated with the specified identifier from the credential manager and then will return a credential that can be used for on-premises authentication

## PARAMETERS

### -Name
The credential to retrieve.

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

### -Type
The object type of the credential to return from the Credential Manager. Possible values are 'O365', 'OnPrem' or 'PSCredential'

```yaml
Type: CredentialType
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)