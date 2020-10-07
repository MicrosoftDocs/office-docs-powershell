---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnpsitescriptfromlist
applicable: SharePoint Online
schema: 2.0.0
title: Get-PnPSiteScriptFromList
---

# Get-PnPSiteScriptFromList

## SYNOPSIS

**Required Permissions**

* SharePoint: Access to the SharePoint Tenant Administration site

Generates a Site Script from an existing list

## SYNTAX 

```powershell
Get-PnPSiteScriptFromList -Url <String>
                          [-Connection <PnPConnection>]
```

## DESCRIPTION
This command allows a Site Script to be generated off of an existing list on your tenant. Connect to your SharePoint Online Admin site before executing this command.

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPSiteScriptFromList -Url https://contoso.sharepoint.com/sites/teamsite/lists/MyList
```

Returns the generated Site Script JSON from the list "MyList" at the provided Url

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPSiteScriptFromList -Url "https://contoso.sharepoint.com/sites/teamsite/Shared Documents"
```

Returns the generated Site Script JSON from the default document library at the provided Url

## PARAMETERS

### -Url
Specifies the URL of the list to generate a Site Script from

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: True
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

```yaml
Type: PnPConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)